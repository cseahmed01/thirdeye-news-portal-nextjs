import ReelCard from "@/components/common/ReelCard";

export default function ReelsContainer({ items }) {
  return (
    <div>
        {
            items?.map((item, index) => (
                <ReelCard key={index} item={item} />
            ))
        }
    </div>
  );
}
