// lib/fetchData.js

const baseUrl = "http://192.168.4.20:8000/api/v1/"; // Replace with your API base URL

export async function fetchData(endPoint, options = {}) {
  try {
    const res = await fetch(`${baseUrl}${endPoint}`, {
      ...options,
      next: {
        revalidate: options.revalidate ?? 60, // Default: 60s ISR
        tags: options.tags ?? [],
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endPoint}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("fetchData error:", error);
    throw error;
  }
}
