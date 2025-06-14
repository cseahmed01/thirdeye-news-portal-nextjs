import { fetchData } from "@/lib/fetchData";
import FeaturedNavs from "./FeaturedNavs";
import Navbar from "./Navbar";
import TopAppBar from "./TopAppBar";

export default async function Header() {
  const categories = await fetchData("categories", {
    // revalidate: 60,
    tags: ["categories"],
  });
  console.log("Fetched categories:", categories);

  return (
    <header>
      <TopAppBar />
      <Navbar categories={categories?.data} />
      <FeaturedNavs />
    </header>
  );
}
