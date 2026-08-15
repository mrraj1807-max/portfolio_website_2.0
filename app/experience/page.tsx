"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { EXPERIENCES } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export default function ExperiencePage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col items-center justify-center py-20 px-6 md:px-20 mt-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-8"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Professional Journey</h1>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16 text-center"
        >
          My Experience
        </motion.h1>

        {/* Timeline */}
        <div className="relative max-w-3xl w-full">
          {/* Timeline line */}
          <div className="absolute left-[20px] md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 opacity-40" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial="hidden"
              animate="visible"
              variants={i % 2 === 0 ? slideInFromLeft(0.5 + i * 0.2) : slideInFromRight(0.5 + i * 0.2)}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[12px] md:left-1/2 md:transform md:-translate-x-1/2 w-[18px] h-[18px] rounded-full bg-[#030014] border-[3px] border-purple-500 z-10">
                {exp.current && (
                  <div className="absolute inset-[2px] rounded-full bg-cyan-400 animate-pulse" />
                )}
              </div>

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-30px)] ${
                  i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="p-6 rounded-xl border border-[#7042f88b] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm hover:border-[#7042f8] transition-all duration-300">
                  {exp.current && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-3">
                      Current
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
