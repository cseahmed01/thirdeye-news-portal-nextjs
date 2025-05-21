"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Container from "../common/Container";

// Featured items data
const featuredItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Support",
    href: "/support",
  },
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "Partners",
    href: "/partners",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "Academy",
    href: "/academy",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Investors",
    href: "/investors",
  },
  {
    title: "Research",
    href: "/research",
  },
];

export default function FeaturedNavs() {
  const navContainerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scrollLeft = () => {
    if (navContainerRef.current) {
      navContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (navContainerRef.current) {
      navContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container className="px-4 sm:px-6 lg:px-8 relative">
      <div className="flex justify-between">
        {/* Desktop featured bar with horizontal scrolling */}
        <div className="hidden md:flex md:items-center md:justify-between md:w-full relative my-2 ">
          {/* Navigation buttons and scrollable container */}
          <div className="flex justify-between items-center w-full px-4 py-1 bg-gray-200">
            {/* Previous button */}
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100"
              onClick={scrollLeft}
            >
              <ChevronLeft size={32} />
              <span className="sr-only">Scroll left</span>
            </Button>

            {/* Scrollable navigation container */}
            <div
              ref={navContainerRef}
              className="flex-grow overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex space-x-10 px-1">
                {featuredItems.map((item) => (
                  <FeaturedItem
                    key={item.title}
                    item={item}
                    selected={selected}
                    setSelected={setSelected}
                  />
                ))}
              </div>
            </div>

            {/* Next button */}
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100"
              onClick={scrollRight}
            >
              <ChevronRight size={32} />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        {/* Mobile version - could be implemented if needed */}
      </div>
    </Container>
  );
}

// Featured item without dropdown
function FeaturedItem({ item, selected, setSelected }) {
  return (
    <div className="relative flex-shrink-0">
      <button
        // href={item.href}
        className={`inline-flex items-center text-sm font-medium px-2 py-1 whitespace-nowrap cursor-pointer ${
          selected == item.title
            ? "bg-gray-900 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => setSelected(item.title)}
      >
        {item.title}
      </button>
    </div>
  );
}
