import { ListFilter } from "lucide-react";

export default function CategoryTitle({ title, sorting = true }) {
  return (
    <div
      className={`flex items-center justify-between mb-6 ${
        sorting ? "mt-12" : "mt-6"
      }`}
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      {sorting && (
        <button className="cursor-pointer">
          <ListFilter size={36} />
        </button>
      )}
    </div>
  );
}
