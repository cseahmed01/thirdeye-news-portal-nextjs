const baseUrl = "http://192.168.4.111:8000/api/v1/"; // Replace with your actual API base URL

// Client-side fetch function for browser requests
export async function fetchDataClient(endPoint, options = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    const fetchOptions = {
      ...options,
      headers,
    };

    // Use Next.js API routes as proxy for client-side requests
    let url;
    if (endPoint.includes("articles/category/")) {
      // Extract category ID and page from endpoint
      const match = endPoint.match(/articles\/category\/(\d+)\?page=(\d+)/);
      if (match) {
        const [, categoryId, page] = match;
        url = `/api/articles/category?categoryId=${categoryId}&page=${page}`;
      } else {
        // Fallback for other patterns
        const categoryMatch = endPoint.match(/articles\/category\/(\d+)/);
        if (categoryMatch) {
          const [, categoryId] = categoryMatch;
          url = `/api/articles/category?categoryId=${categoryId}&page=1`;
        }
      }
    }

    if (!url) {
      throw new Error(`Unsupported endpoint: ${endPoint}`);
    }

    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endPoint}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("fetchDataClient error:", error);
    throw error;
  }
}

// Server-side fetch function (original)
export async function fetchData(endPoint, options = {}) {
  try {
    const headers = {
      "X-Client-Key": "web-12345",
      ...options.headers, // allow custom headers
    };

    const fetchOptions = {
      ...options,
      headers,
    };

    // Handle Next.js fetch cache control
    if (options.cache === "no-store") {
      fetchOptions.cache = "no-store"; // disables all caching
    } else {
      fetchOptions.next = {
        revalidate: options.revalidate ?? 60, // default 60s revalidation
        tags: options.tags ?? [],
      };
    }

    const res = await fetch(`${baseUrl}${endPoint}`, fetchOptions);

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endPoint}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("fetchData error:", error);
    throw error;
  }
}
