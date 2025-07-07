import { ListFilter, Search } from "lucide-react";

export default function CategoryTitle({
  title,
  sorting = true,
  search = false,
}) {
  return (
    <div
      className={`flex items-center justify-between mb-6 ${
        sorting ? "mt-12" : "mt-6"
      }`}
    >
      <div className="flex items-center gap-5">
        {/* Category title */}
        <h1 className="text-3xl font-bold">{title}</h1>
        {/* Search input */}
        {search && (
          <div className="flex items-center border gap-2 px-2 py-2.5">
            <Search size="16" />
            <input
              type="text"
              name=""
              id=""
              className="w-[145px] outline-0 text-xs placeholder:text-[#7C7C7C] bg-transparent"
              placeholder="অনুসন্ধান..."
            />
          </div>
        )}
      </div>
      {/* Sorting button */}
      {sorting && (
        <button className="cursor-pointer">
          <ListFilter size={36} />
        </button>
      )}
    </div>
  );
}
