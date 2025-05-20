import FeaturedNavs from "./FeaturedNavs";
import Navbar from "./Navbar";
import TopAppBar from "./TopAppBar";

export default function Header() {
  return (
    <header>
      <TopAppBar />
      <Navbar />
      <FeaturedNavs />
    </header>
  );
}
