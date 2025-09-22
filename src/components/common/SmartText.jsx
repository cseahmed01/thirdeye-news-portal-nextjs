"use client";

/**
 * SmartText component that automatically applies the correct font based on text content
 * - Uses Lekhoni font for Bengali text
 * - Uses Inter font for English text
 */
export default function SmartText({ children, className = "", ...props }) {
  // Simple regex to detect Bengali characters
  const bengaliRegex = /[\u0980-\u09FF]/;

  const isBengali = typeof children === "string" && bengaliRegex.test(children);

  const fontClass = isBengali ? "bengali-text" : "english-text";
  const combinedClassName = `${fontClass} ${className}`.trim();

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
}

// You can also create specific variants
export function BengaliText({ children, className = "", ...props }) {
  return (
    <span className={`bengali-text ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}

export function EnglishText({ children, className = "", ...props }) {
  return (
    <span className={`english-text ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
