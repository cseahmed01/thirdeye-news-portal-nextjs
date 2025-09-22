import { fetchData } from "@/lib/fetchData";
import TopAppBar from "./TopAppBar";
import ResponsiveNavbar from "./responsive-navbar";

export default async function Header() {
  const categories = await fetchData("categories", {
    cache: "no-store",
    tags: ["categories"],
  });

  const topics = await fetchData("trending-topics", {
    cache: "no-store",
    tags: ["topics"],
  });

  return (
    <header className="bg-brand text-white">
      <TopAppBar />
      {/* <Navbar categories={categories?.data} /> */}
      <ResponsiveNavbar categories={categories} topics={topics} />
      {/* <FeaturedNavs /> */}
    </header>
  );
}
