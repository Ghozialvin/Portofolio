// Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      {/* Bulatan bergradasi dengan huruf A */}
      <div
        className="flex items-center justify-center rounded-full shadow-2xl
                   w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44
                   bg-gradient-to-r from-purple-400 to-purple-700
                   transform transition-all duration-300
                   animate-pulse"
      >
        <span
          className="text-white font-extrabold leading-none select-none
                     text-4xl sm:text-5xl md:text-6xl"
          aria-hidden="true"
        >
          A
        </span>
      </div>
    </div>
  );
};

export default Loading;
