import { fetchData } from "@/lib/fetchData";
import Navbar from "./Navbar";
import TopAppBar from "./TopAppBar";

export default async function Header() {
  const categories = await fetchData("categories", {
    cache: "no-store",
    tags: ["categories"],
  });

  return (
    <header className="bg-brand text-white">
      <TopAppBar />
      <Navbar categories={categories?.data} />
      {/* <FeaturedNavs /> */}
    </header>
  );
}
