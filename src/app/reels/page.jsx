import ReelsPageClient from "@/components/pages/reels/ReelsPageClient";
import { fetchData } from "@/lib/fetchData";

export default async function page() {
  const reels = await fetchData(`reels/list?page=1`, {
    revalidate: 10,
  });
  console.log("🚀 ~ page ~ reels:", reels);

  return <ReelsPageClient reels={reels?.data} />;
}
