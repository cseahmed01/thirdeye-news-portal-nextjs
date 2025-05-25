"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [showButtons, setShowButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check if scrolling is needed and update button states
  const checkScrollability = () => {
    if (navContainerRef.current) {
      const container = navContainerRef.current;
      const needsScrolling = container.scrollWidth > container.clientWidth;

      setShowButtons(needsScrolling);

      if (needsScrolling) {
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      }
    }
  };

  // Initial check and resize observer
  useEffect(() => {
    checkScrollability();

    const resizeObserver = new ResizeObserver(() => {
      checkScrollability();
    });

    if (navContainerRef.current) {
      resizeObserver.observe(navContainerRef.current);
    }

    // Also listen for window resize
    window.addEventListener("resize", checkScrollability);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  // Update button states on scroll
  const handleScroll = () => {
    checkScrollability();
  };

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
        <div className="hidden md:flex md:items-center md:justify-between md:w-full relative mt-2">
          {/* Navigation buttons and scrollable container */}
          <div
            className={cn(
              "flex items-center w-full px-4 py-1 bg-gray-200",
              showButtons ? "justify-between" : "justify-center"
            )}
          >
            {/* Previous button - only show if needed and can scroll left */}
            {showButtons && (
              <button
                className={cn(
                  "mr-2 flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100 transition-opacity duration-200",
                  canScrollLeft
                    ? "opacity-100"
                    : "opacity-50 cursor-not-allowed"
                )}
                onClick={scrollLeft}
                disabled={!canScrollLeft}
              >
                <ChevronLeft size={24} />
                <span className="sr-only">Scroll left</span>
              </button>
            )}

            {/* Scrollable navigation container */}
            <div
              ref={navContainerRef}
              className={cn(
                "overflow-x-auto scrollbar-hide scroll-smooth",
                showButtons ? "flex-grow" : "flex-grow"
              )}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={handleScroll}
            >
              <div
                className={cn(
                  "flex px-1",
                  showButtons ? "space-x-10" : "space-x-10 justify-center"
                )}
              >
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

            {/* Next button - only show if needed and can scroll right */}
            {showButtons && (
              <button
                className={cn(
                  "ml-2 flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100 transition-opacity duration-200",
                  canScrollRight
                    ? "opacity-100"
                    : "opacity-50 cursor-not-allowed"
                )}
                onClick={scrollRight}
                disabled={!canScrollRight}
              >
                <ChevronRight size={24} />
                <span className="sr-only">Scroll right</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile version - simple centered layout */}
        <div className="md:hidden flex items-center justify-center w-full mt-2">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 py-1 bg-gray-200">
            {featuredItems.slice(0, 5).map((item) => (
              <FeaturedItem
                key={item.title}
                item={item}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

// Featured item without dropdown
function FeaturedItem({ item, selected, setSelected }) {
  return (
    <div className="relative flex-shrink-0">
      <button
        className={`inline-flex items-center text-sm font-medium px-2 py-1 whitespace-nowrap cursor-pointer transition-colors duration-200 ${
          selected === item.title
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
