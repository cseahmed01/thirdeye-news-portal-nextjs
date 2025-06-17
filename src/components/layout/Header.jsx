import { fetchData } from "@/lib/fetchData";
import FeaturedNavs from "./FeaturedNavs";
import Navbar from "./Navbar";
import TopAppBar from "./TopAppBar";

export default async function Header() {
  const categories = await fetchData("categories", {
    cache: "no-store",
    tags: ["categories"],
  });

  return (
    <header>
      <TopAppBar />
      <Navbar categories={categories?.data} />
      <FeaturedNavs />
    </header>
  );
}
