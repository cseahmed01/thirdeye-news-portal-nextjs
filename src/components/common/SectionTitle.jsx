export default function SectionTitle({ title, bt = false, notAll = false }) {
  return (
    <div
      className={`flex items-center justify-between w-full gap-4 py-2  my-6 ${
        bt ? "border-t border-b" : " border-b"
      }`}
    >
      <h2 className="text-header font-bold">{title}</h2>
      {!notAll && (
        <button className="text-md hover:underline cursor-pointer">
          সব দেখুন
        </button>
      )}
    </div>
  );
}
