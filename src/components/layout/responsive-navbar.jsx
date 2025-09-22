"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResponsiveNavbar({ categories, topics }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const navigationItems = categories?.data || [];

  const visibleItems = navigationItems.slice(0, 9);
  const hiddenItems = navigationItems.slice(9);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsExpanded(false);
    }, 100); // Small delay to allow moving between button and expanded section
    setHoverTimeout(timeout);
  };

  const handleLinkClick = () => {
    // Clear any pending timeout and close immediately when link is clicked
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsExpanded(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile Navigation */}
        <nav className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-12">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-foreground">
                  Categories
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Full Screen Menu */}
        <div
          className={`fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">
                Navigation
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid gap-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`/category/${item.id}`}
                    className="block px-4 py-3 text-base font-light text-foreground hover:bg-muted hover:text-accent transition-colors duration-200 rounded-sm"
                    onClick={toggleMobileMenu}
                  >
                    {item.category_name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 h-10">
            {visibleItems.map((item) => (
              <Link
                key={item.id}
                href={`/category/${item.id}`}
                className="text-sm font-light whitespace-nowrap hover:underline hover:text-accent transition-colors duration-200"
              >
                {item.category_name}
              </Link>
            ))}

            {hiddenItems.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-sm font-light p-0 h-auto cursor-pointer"
              >
                আরও
                <ChevronDown
                  className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </Button>
            )}
          </div>
        </div>
        {/* Animated Expandable Section */}
        <div
          className={`absolute left-0 right-0 top-full w-full z-50 overflow-y-scroll scrollbar-hide bg-black shadow-lg transition-[max-height] duration-500 ease-in-out ${
            isExpanded ? "max-h-[500px]" : "max-h-0"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-4xl mx-auto px-3 py-6">
            <div className="flex justify-start items-center gap-x-12 gap-y-4 overflow-hidden flex-wrap">
              {hiddenItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/category/${item.id}`}
                  className="text-sm font-light text-white hover:underline hover:text-accent transition-colors duration-200 whitespace-nowrap"
                  onClick={handleLinkClick}
                >
                  {item.category_name}
                </Link>
              ))}
            </div>
            <p className="block border-b border-white mb-5 mt-6">ট্রেন্ডিং</p>
            <div className="flex justify-start items-center gap-x-12 gap-y-4 overflow-hidden flex-wrap">
              {topics?.data?.map((item) => (
                <Link
                  key={item.id}
                  href={`/topic/${item.topic_id}`}
                  className="text-sm font-light text-white hover:underline hover:text-accent transition-colors duration-200 whitespace-nowrap "
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}
