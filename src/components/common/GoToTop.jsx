"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // Calculate scroll progress
    const progress = (scrolled / maxHeight) * 100;
    setScrollProgress(progress);

    // Show button after scrolling 300px
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group cursor-pointer"
          aria-label="Go to top"
        >
          {/* Progress ring */}
          <div className="relative w-12 h-12">
            <svg
              className="absolute inset-0 w-12 h-12 transform -rotate-90"
              viewBox="0 0 48 48"
            >
              {/* Background circle */}
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="3"
              />
              {/* Progress circle */}
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="#012075"
                strokeOpacity="0.8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${
                  2 * Math.PI * 20 * (1 - scrollProgress / 100)
                }`}
                className="transition-all duration-300 ease-out"
              />
            </svg>

            {/* Button content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-10 h-10 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform group-hover:scale-110 group-active:scale-95"
                style={{
                  backgroundColor: "#012075",
                  backgroundImage:
                    "linear-gradient(135deg, #012075 0%, #013a9a 100%)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundImage =
                    "linear-gradient(135deg, #013a9a 0%, #0146b8 100%)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundImage =
                    "linear-gradient(135deg, #012075 0%, #013a9a 100%)";
                }}
              >
                <ChevronUp className="w-5 h-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Ripple effect */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-active:opacity-20 group-active:animate-ping"
            style={{ backgroundColor: "#012075" }}
          ></div>
        </button>
      )}
    </>
  );
};

export default GoToTop;
