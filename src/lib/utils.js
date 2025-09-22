import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFormattedBengaliDate(datetimeString) {
  try {
    if (!datetimeString) return "";

    const date = new Date(datetimeString);
    if (isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  } catch (error) {
    console.error("Invalid date format:", datetimeString);
    return "";
  }
}

export const fallbackImage = "/assets/fallback.webp";

export const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://192.168.4.11:8000/api/v1/";

// Token management utilities
export const tokenStorage = {
  // Get token from storage (checks both localStorage and sessionStorage)
  getToken: () => {
    if (typeof window === "undefined") return null;
    return (
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
    );
  },

  // Set token in storage
  setToken: (token, remember = false) => {
    if (typeof window === "undefined") return;

    if (remember) {
      localStorage.setItem("authToken", token);
      // Remove from sessionStorage if it exists
      sessionStorage.removeItem("authToken");
    } else {
      sessionStorage.setItem("authToken", token);
      // Remove from localStorage if it exists
      localStorage.removeItem("authToken");
    }
  },

  // Remove token from both storages
  removeToken: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!tokenStorage.getToken();
  },
};
