const baseUrl = "http://192.168.4.14:8000/api/v1/"; // Replace with your actual API base URL

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
