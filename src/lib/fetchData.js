import { baseUrl } from "./utils";

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
    } else if (endPoint.includes("articles/trending/")) {
      // Extract topic ID and page from endpoint
      const match = endPoint.match(/articles\/trending\/(\d+)\?page=(\d+)/);
      if (match) {
        const [, topicId, page] = match;
        url = `/api/articles/trending?topicId=${topicId}&page=${page}`;
      } else {
        // Fallback for other patterns
        const topicMatch = endPoint.match(/articles\/trending\/(\d+)/);
        if (topicMatch) {
          const [, topicId] = topicMatch;
          url = `/api/articles/trending?topicId=${topicId}&page=1`;
        }
      }
    } else if (endPoint.includes("videos/list")) {
      // Extract page from videos endpoint
      const match = endPoint.match(/videos\/list\?page=(\d+)/);
      if (match) {
        const [, page] = match;
        url = `/api/videos?page=${page}`;
      } else {
        url = `/api/videos?page=1`;
      }
    }

    if (!url) {
      throw new Error(`Unsupported endpoint: ${endPoint}`);
    }

    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
      // Check if this is a "no more data" scenario (for pagination)
      // Don't throw errors for expected pagination end scenarios
      if (
        (res.status === 500 || res.status === 404) &&
        endPoint.includes("page=")
      ) {
        // Return a standard "no data" response for pagination endpoints
        return { data: [], meta: {} };
      }

      // Try to get more detailed error information for actual errors
      let errorMessage = `Failed to fetch ${endPoint}: ${res.statusText}`;
      try {
        const errorData = await res.json();
        if (errorData.error) {
          errorMessage = errorData.error;
        }
      } catch (jsonError) {
        // If we can't parse the error response, use the status text
      }

      const error = new Error(errorMessage);
      error.status = res.status;
      error.statusText = res.statusText;
      throw error;
    }

    const result = await res.json();

    // Handle backend returning null for no more data
    if (result === null && endPoint.includes("page=")) {
      return { data: [], meta: {} };
    }

    return result;
  } catch (error) {
    // Only log actual unexpected errors, not pagination end scenarios
    if (
      !(
        error.message.includes("page=") &&
        (error.status === 500 || error.status === 404)
      )
    ) {
      console.error("fetchDataClient error:", error);
    }

    // Add more context to network errors
    if (error instanceof TypeError && error.message.includes("fetch")) {
      const networkError = new Error(
        "Network error: Please check your internet connection"
      );
      networkError.isNetworkError = true;
      throw networkError;
    }

    throw error;
  }
}

// Server-side fetch function (original)
export async function fetchData(endPoint, options = {}) {
  try {
    const headers = {
      "X-Client-Key": process.env.API_CLIENT_KEY ?? "web-12345",
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
