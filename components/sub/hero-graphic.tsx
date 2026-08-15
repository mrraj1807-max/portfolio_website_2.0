"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TOOLS = [
  // Center
  {
    name: "Power BI",
    src: "powerbi.jpg",
    className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30",
    size: "w-20 h-20 md:w-24 md:h-24",
    imgSize: 72,
    glow: "shadow-[0_0_25px_rgba(242,200,17,0.5)] border-amber-400/50",
    delay: 0,
  },
  // Inner orbit
  {
    name: "Python",
    src: "python.jpg",
    className: "top-[18%] left-[28%] -translate-x-1/2 -translate-y-1/2 z-20",
    size: "w-14 h-14 md:w-16 md:h-16",
    imgSize: 48,
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)] border-blue-400/40",
    delay: 0.2,
  },
  {
    name: "Tableau",
    src: "tableau.jpg",
    className: "top-[22%] right-[18%] translate-x-1/2 -translate-y-1/2 z-20",
    size: "w-14 h-14 md:w-16 md:h-16",
    imgSize: 48,
    glow: "shadow-[0_0_15px_rgba(233,118,39,0.4)] border-orange-400/40",
    delay: 0.4,
  },
  {
    name: "MySQL",
    src: "mysql.jpg",
    className: "bottom-[22%] left-[22%] -translate-x-1/2 translate-y-1/2 z-20",
    size: "w-14 h-14 md:w-16 md:h-16",
    imgSize: 48,
    glow: "shadow-[0_0_15px_rgba(0,117,143,0.4)] border-teal-400/40",
    delay: 0.6,
  },
  {
    name: "Excel",
    src: "excel.jpg",
    className: "bottom-[20%] right-[24%] translate-x-1/2 translate-y-1/2 z-20",
    size: "w-14 h-14 md:w-16 md:h-16",
    imgSize: 48,
    glow: "shadow-[0_0_15px_rgba(33,115,70,0.4)] border-emerald-400/40",
    delay: 0.8,
  },
  // Middle orbit
  {
    name: "Microsoft Fabric",
    src: "fabric.jpg",
    className: "top-[8%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20",
    size: "w-12 h-12 md:w-14 md:h-14",
    imgSize: 40,
    glow: "shadow-[0_0_15px_rgba(232,101,26,0.4)] border-amber-500/40",
    delay: 1.0,
  },
  {
    name: "AWS",
    src: "aws.jpg",
    className: "top-1/2 right-[6%] translate-x-1/2 -translate-y-1/2 z-20",
    size: "w-12 h-12 md:w-14 md:h-14",
    imgSize: 40,
    glow: "shadow-[0_0_15px_rgba(255,153,0,0.4)] border-yellow-500/40",
    delay: 1.2,
  },
  {
    name: "Azure",
    src: "azure.jpg",
    className: "top-1/2 left-[6%] -translate-x-1/2 -translate-y-1/2 z-20",
    size: "w-12 h-12 md:w-14 md:h-14",
    imgSize: 40,
    glow: "shadow-[0_0_15px_rgba(0,137,214,0.4)] border-sky-400/40",
    delay: 1.4,
  },
  // Outer orbit (Automation)
  {
    name: "n8n",
    src: "n8n.jpg",
    className: "bottom-[8%] left-1/2 -translate-x-1/2 translate-y-1/2 z-20",
    size: "w-12 h-12 md:w-14 md:h-14",
    imgSize: 40,
    glow: "shadow-[0_0_15px_rgba(234,75,113,0.4)] border-pink-400/40",
    delay: 1.6,
  },
  {
    name: "make.com",
    src: "make.jpg",
    className: "top-[36%] left-[12%] -translate-x-1/2 -translate-y-1/2 z-20",
    size: "w-12 h-12 md:w-14 md:h-14",
    imgSize: 40,
    glow: "shadow-[0_0_15px_rgba(109,0,204,0.4)] border-purple-400/40",
    delay: 1.8,
  },
  {
    name: "Power Automate",
    src: "powerautomate.jpg",
    className: "top-[38%] right-[10%] translate-x-1/2 -translate-y-1/2 z-20",
    size: "w-12 h-12 md:w-14 md:h-14",
    imgSize: 40,
    glow: "shadow-[0_0_15px_rgba(0,102,255,0.4)] border-blue-500/40",
    delay: 2.0,
  },
];

export const HeroGraphic = () => {
  return (
    <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[620px] lg:h-[620px] flex items-center justify-center select-none">
      {/* Radar Background Circular Grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Ring */}
        <div className="w-[95%] h-[95%] rounded-full border border-purple-500/20 animate-[spin_60s_linear_infinite]" />
        {/* Mid Ring */}
        <div className="absolute w-[75%] h-[75%] rounded-full border border-cyan-500/25 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
        {/* Inner Ring */}
        <div className="absolute w-[52%] h-[52%] rounded-full border border-purple-400/30" />
        {/* Core Ring */}
        <div className="absolute w-[30%] h-[30%] rounded-full border border-cyan-400/40 bg-purple-900/10 backdrop-blur-xs" />

        {/* Crosshair Lines */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute w-[80%] h-[1px] rotate-45 bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />
        <div className="absolute w-[80%] h-[1px] -rotate-45 bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

        {/* Ambient Glow */}
        <div className="absolute w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-purple-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Floating Tool Badges */}
      {TOOLS.map((tool) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: tool.delay }}
          className={`absolute ${tool.className}`}
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3 + (tool.delay % 2),
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`flex items-center justify-center rounded-2xl bg-white/95 border ${tool.glow} ${tool.size} p-2 backdrop-blur-md hover:scale-115 hover:z-40 transition-transform duration-300 cursor-pointer shadow-xl group`}
            title={tool.name}
          >
            <Image
              src={`/skills/${tool.src}`}
              alt={tool.name}
              width={tool.imgSize}
              height={tool.imgSize}
              className="object-contain w-full h-full rounded-lg"
              unoptimized
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
