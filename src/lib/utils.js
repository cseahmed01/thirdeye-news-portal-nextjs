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
