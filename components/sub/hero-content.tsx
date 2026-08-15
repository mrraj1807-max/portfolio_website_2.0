"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { HeroGraphic } from "./hero-graphic";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-20 mt-36 lg:mt-40 w-full z-[20] gap-12"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start max-w-[620px]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Data Analyst & Business Analyst Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          <span>
            I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Analyze
            </span>{" "}
            Data,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Discover
            </span>{" "}
            Insights,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Strategize
            </span>{" "}
            Solutions &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Deliver
            </span>{" "}
            Impact.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-4 max-w-[600px] leading-relaxed"
        >
          Aspiring Data Analyst & Business Analyst with 2+ years of hands-on
          experience in accounting & financial reporting. Turning raw data into
          actionable dashboards and insights that drive real business decisions.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 items-center mt-2"
        >
          <a
            href="/contact"
            className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-[#7042f830]"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="py-3 px-6 rounded-xl border border-[#7042f88b] text-gray-300 hover:text-white hover:border-[#7042f8] transition-all duration-300 text-sm font-medium"
          >
            View Experience
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-auto flex justify-center items-center"
      >
        <HeroGraphic />
      </motion.div>
    </motion.div>
  );
};
