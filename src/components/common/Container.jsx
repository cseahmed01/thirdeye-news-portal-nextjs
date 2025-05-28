export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-[1440px] mx-auto px-4 ${className}`}>{children}</div>
  );
}
// This component is a container that centers its children and limits the maximum width to 1440 pixels. It uses Tailwind CSS classes for styling.
