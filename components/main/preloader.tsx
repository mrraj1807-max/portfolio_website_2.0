"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "unset";
          }, 300);
          return 100;
        }
        // Increment with natural pacing
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#030014] select-none"
        >
          {/* Subtle Background Watermark Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 overflow-hidden pointer-events-none whitespace-nowrap">
            <span className="text-[10vw] font-extrabold tracking-tighter text-white uppercase">
              AMIT DWIVEDI • DATA ANALYST •
            </span>
          </div>

          {/* Centered Futuristic Loading Pill */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex items-center justify-between px-8 py-3.5 rounded-full bg-[#0a061e]/90 border border-[#7042f88b] shadow-[0_0_30px_rgba(112,66,248,0.35)] backdrop-blur-xl min-w-[280px]"
          >
            {/* Loading text with pulse */}
            <span className="text-sm font-semibold tracking-widest text-gray-200">
              LOADING
            </span>

            {/* Progress percentage & animated indicator */}
            <div className="flex items-center gap-2.5">
              <span className="text-sm font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {progress}%
              </span>

              {/* Progress mini bar */}
              <div className="w-10 h-2 bg-gray-800/80 rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-75 rounded-full shadow-[0_0_8px_#a855f7]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
