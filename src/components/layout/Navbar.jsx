"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";

// Menu data with many items
const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "#",
    submenu: [
      {
        title: "Electronics",
        href: "/products/electronics",
        submenu: [
          {
            title: "Smartphones",
            href: "/products/electronics/smartphones",
          },
          {
            title: "Laptops",
            href: "/products/electronics/laptops",
          },
          {
            title: "Tablets",
            href: "/products/electronics/tablets",
          },
        ],
      },
      {
        title: "Clothing",
        href: "/products/clothing",
        submenu: [
          {
            title: "Men",
            href: "/products/clothing/men",
          },
          {
            title: "Women",
            href: "/products/clothing/women",
          },
          {
            title: "Kids",
            href: "/products/clothing/kids",
          },
        ],
      },
      {
        title: "Books",
        href: "/products/books",
      },
    ],
  },
  {
    title: "Services",
    href: "#",
    submenu: [
      {
        title: "Consulting",
        href: "/services/consulting",
      },
      {
        title: "Development",
        href: "/services/development",
      },
      {
        title: "Support",
        href: "/services/support",
      },
    ],
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

export default function Navbar({ categories }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navContainerRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target) return;

      const target = event.target;
      const isDropdownButton = target.closest("[data-dropdown-button]");
      const isInsideDropdown = target.closest("[data-dropdown-content]");

      if (!isDropdownButton && !isInsideDropdown) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <nav>
      <Container className="relative">
        <div className="flex justify-between border-b">
          {/* Desktop menu with horizontal scrolling */}
          <div className="hidden md:flex md:items-center md:justify-between md:w-full relative">
            {/* Navigation buttons and scrollable container */}
            <div
              className={cn(
                "flex items-center w-full py-4 px-3",
                showButtons ? "justify-between" : "justify-center"
              )}
            >
              {/* Previous button - only show if needed and can scroll left */}
              {showButtons && (
                <button
                  className={cn(
                    "mr-2 flex-shrink-0 z-10 p-1 cursor-pointer hover:bg-gray-100 transition-opacity duration-200",
                    canScrollLeft ? "opacity-100" : "opacity-50"
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
                  showButtons ? "flex-grow max-w-5xl" : "flex-grow"
                )}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onScroll={handleScroll}
              >
                <div
                  className={cn(
                    "flex px-1",
                    showButtons ? "space-x-7" : "space-x-7 justify-center"
                  )}
                >
                  <Link
                    href="/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap"
                  >
                    সর্বশেষ
                  </Link>
                  {categories?.map((item) => (
                    <NavItem
                      key={item?.id}
                      item={item}
                      isOpen={openDropdown === item?.category_name}
                      onToggle={() => {
                        setOpenDropdown(
                          openDropdown === item?.category_name
                            ? null
                            : item?.category_name
                        );
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Next button - only show if needed and can scroll right */}
              {showButtons && (
                <button
                  className={cn(
                    "ml-2 flex-shrink-0 z-10 p-1 cursor-pointer hover:bg-gray-100 transition-opacity duration-200",
                    canScrollRight ? "opacity-100" : "opacity-50"
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

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn("md:hidden", {
          block: isMobileMenuOpen,
          hidden: !isMobileMenuOpen,
        })}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[70vh] overflow-y-auto">
          {categories.map((item) => (
            <MobileNavItem key={item?.id} item={item} />
          ))}
        </div>
      </div>

      {/* Dropdown container - positioned outside the scrollable area */}
      <div
        id="dropdown-container"
        className="absolute top-0 left-0 w-full pointer-events-none"
      >
        {/* Dropdowns will be rendered here */}
      </div>
    </nav>
  );
}

// Desktop navigation item with dropdown
function NavItem({ item, isOpen, onToggle }) {
  const hasSubmenu = item?.subcategories && item?.subcategories.length > 0;
  const buttonRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  // Update dropdown position when button position changes
  useEffect(() => {
    if (buttonRef.current && isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,
        left: rect.left,
      });
    }
  }, [isOpen]);

  return (
    <div className="relative flex-shrink-0">
      {hasSubmenu ? (
        <>
          <button
            ref={buttonRef}
            data-dropdown-button={item.id}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggle();
            }}
          >
            {item.category_name}
            <ChevronDown
              className={cn("ml-1 h-4 w-4 transition-transform duration-200", {
                "rotate-180": isOpen,
              })}
            />
          </button>

          {isOpen &&
            hasSubmenu &&
            createPortal(
              <div
                data-dropdown-content={item?.id}
                className="fixed bg-white rounded-md shadow-lg z-[9999] pointer-events-auto border"
                style={{
                  top: `${dropdownPosition.top}px`,
                  left: `${dropdownPosition.left}px`,
                  width: "14rem",
                }}
              >
                <div className="py-1 rounded-md bg-white">
                  {item?.subcategories.map((subItem) => (
                    <SubmenuItem key={subItem?.id} item={subItem} />
                  ))}
                </div>
              </div>,
              document.getElementById("dropdown-container") || document.body
            )}
        </>
      ) : (
        <Link
          href={`/category/${item?.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap"
        >
          {item?.category_name}
        </Link>
      )}
    </div>
  );
}

// Create a portal to render content outside the current DOM hierarchy
function createPortal(content, container) {
  // In a real implementation, we would use ReactDOM.createPortal
  // Since we're in a simplified environment, we'll just return the content
  return content;
}

// Submenu item with potential nested dropdown
function SubmenuItem({ item }) {
  const hasSubmenu = item?.subcategories && item?.subcategories.length > 0;
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });

  // Update submenu position when parent position changes
  useEffect(() => {
    if (itemRef.current && isOpen) {
      const rect = itemRef.current.getBoundingClientRect();
      setSubmenuPosition({
        top: rect.top,
        left: rect.right,
      });
    }
  }, [isOpen]);

  return (
    <div ref={itemRef} className="relative">
      {hasSubmenu ? (
        <>
          <button
            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <div className="flex justify-between items-center">
              {item?.category_name}
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </button>

          {isOpen &&
            hasSubmenu &&
            createPortal(
              <div
                className="fixed bg-white rounded-md shadow-lg z-[9999] pointer-events-auto border"
                style={{
                  top: `${submenuPosition.top}px`,
                  left: `${submenuPosition.left}px`,
                  width: "14rem",
                }}
              >
                <div className="py-1 rounded-md bg-white">
                  {item?.subcategories.map((subItem) => (
                    <Link
                      key={subItem?.id}
                      href={`/category/${subItem?.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {subItem?.category_name}
                    </Link>
                  ))}
                </div>
              </div>,
              document.getElementById("dropdown-container") || document.body
            )}
        </>
      ) : (
        <Link
          href={`/category/${item?.id}`}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          {item?.category_name}
        </Link>
      )}
    </div>
  );
}

// Mobile navigation item with collapsible submenu
function MobileNavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item?.subcategories && item?.subcategories.length > 0;

  return (
    <div>
      {hasSubmenu ? (
        <div>
          <button
            className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {item?.category_name}
            <ChevronDown
              className={cn("ml-1 h-4 w-4 transition-transform duration-200", {
                "rotate-180": isOpen,
              })}
            />
          </button>
          {isOpen && (
            <div className="pl-4 mt-1 space-y-1">
              {item?.subcategories.map((subItem) => (
                <MobileNavItem key={subItem?.id} item={subItem} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={`/category/${item?.id}`}
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          {item?.category_name}
        </Link>
      )}
    </div>
  );
}
