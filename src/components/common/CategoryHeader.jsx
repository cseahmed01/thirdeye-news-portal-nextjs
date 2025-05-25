export default function CategoryHeader({ title }) {
  return (
    <div className="flex items-center justify-between w-full gap-4 pb-2 border-b my-6">
      <h2 className="text-header font-bold">{title}</h2>
      <button className="text-md hover:underline cursor-pointer">
        সব দেখুন
      </button>
    </div>
  );
}
