import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFormattedBengaliDate(datetimeString) {
  return new Intl.DateTimeFormat("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(datetimeString));
}


