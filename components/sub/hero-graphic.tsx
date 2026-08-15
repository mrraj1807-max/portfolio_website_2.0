"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface OrbitTool {
  name: "Power BI" | "Python" | "Tableau" | "MySQL" | "Excel" | "Microsoft Fabric" | "AWS" | "Azure" | "n8n" | "make.com" | "Power Automate";
  src: string;
  angle: number; // in degrees
  glow: string;
  borderGlow: string;
}

// Inner Orbit (Core Analytics - 3 tools, 120° apart)
const INNER_TOOLS: OrbitTool[] = [
  {
    name: "Python",
    src: "python.jpg",
    angle: 0,
    glow: "shadow-[0_0_18px_rgba(59,130,246,0.6)]",
    borderGlow: "border-blue-400",
  },
  {
    name: "Tableau",
    src: "tableau.jpg",
    angle: 120,
    glow: "shadow-[0_0_18px_rgba(233,118,39,0.6)]",
    borderGlow: "border-orange-400",
  },
  {
    name: "MySQL",
    src: "mysql.jpg",
    angle: 240,
    glow: "shadow-[0_0_18px_rgba(0,164,228,0.6)]",
    borderGlow: "border-cyan-400",
  },
];

// Middle Orbit (Cloud & Enterprise - 4 tools, 90° apart)
const MIDDLE_TOOLS: OrbitTool[] = [
  {
    name: "Microsoft Fabric",
    src: "fabric.jpg",
    angle: 45,
    glow: "shadow-[0_0_18px_rgba(232,101,26,0.6)]",
    borderGlow: "border-amber-400",
  },
  {
    name: "AWS",
    src: "aws.jpg",
    angle: 135,
    glow: "shadow-[0_0_18px_rgba(255,153,0,0.6)]",
    borderGlow: "border-yellow-400",
  },
  {
    name: "Excel",
    src: "excel.jpg",
    angle: 225,
    glow: "shadow-[0_0_18px_rgba(33,115,70,0.6)]",
    borderGlow: "border-emerald-400",
  },
  {
    name: "Azure",
    src: "azure.jpg",
    angle: 315,
    glow: "shadow-[0_0_18px_rgba(0,120,214,0.6)]",
    borderGlow: "border-sky-400",
  },
];

// Outer Orbit (Workflow Automation - 3 tools, 120° apart)
const OUTER_TOOLS: OrbitTool[] = [
  {
    name: "n8n",
    src: "n8n.jpg",
    angle: 30,
    glow: "shadow-[0_0_18px_rgba(234,75,113,0.6)]",
    borderGlow: "border-pink-400",
  },
  {
    name: "make.com",
    src: "make.jpg",
    angle: 150,
    glow: "shadow-[0_0_18px_rgba(109,0,204,0.6)]",
    borderGlow: "border-purple-400",
  },
  {
    name: "Power Automate",
    src: "powerautomate.jpg",
    angle: 270,
    glow: "shadow-[0_0_18px_rgba(0,102,255,0.6)]",
    borderGlow: "border-blue-500",
  },
];

export const HeroGraphic = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px] flex items-center justify-center select-none">
      {/* Background Ambient Cosmic Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-purple-600/15 via-cyan-500/15 to-transparent blur-3xl" />
        <div className="w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-2xl animate-pulse" />
      </div>

      {/* Radar Crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/25 to-transparent" />
        <div className="absolute w-[80%] h-[1px] rotate-45 bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />
        <div className="absolute w-[80%] h-[1px] -rotate-45 bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1. OUTER ORBIT (Automation: n8n, make.com, Power Automate)     */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute w-[92%] h-[92%] rounded-full border border-purple-500/25 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/20" />
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 46,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[92%] h-[92%] rounded-full pointer-events-none"
      >
        {OUTER_TOOLS.map((tool) => {
          const rad = (tool.angle * Math.PI) / 180;
          // Percentage coordinates around circle (radius = 50%)
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);

          return (
            <div
              key={tool.name}
              style={{
                top: `${y}%`,
                left: `${x}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 46,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className={`relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white p-2 border-2 ${tool.borderGlow} ${tool.glow} shadow-xl hover:scale-125 transition-transform duration-300 cursor-pointer overflow-hidden`}
                >
                  <Image
                    src={`/skills/${tool.src}`}
                    alt={tool.name}
                    width={44}
                    height={44}
                    className="object-contain w-full h-full rounded-full"
                    unoptimized
                  />
                  {/* Hover Tooltip */}
                  <span className="absolute -bottom-7 px-2 py-0.5 rounded-md bg-[#030014]/90 border border-purple-500/50 text-[10px] text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* 2. MIDDLE ORBIT (Cloud: Fabric, AWS, Excel, Azure)            */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute w-[68%] h-[68%] rounded-full border border-cyan-500/30 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-dashed border-purple-400/25" />
      </div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[68%] h-[68%] rounded-full pointer-events-none"
      >
        {MIDDLE_TOOLS.map((tool) => {
          const rad = (tool.angle * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);

          return (
            <div
              key={tool.name}
              style={{
                top: `${y}%`,
                left: `${x}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 36,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className={`relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 rounded-full bg-white p-2 border-2 ${tool.borderGlow} ${tool.glow} shadow-xl hover:scale-125 transition-transform duration-300 cursor-pointer overflow-hidden`}
                >
                  <Image
                    src={`/skills/${tool.src}`}
                    alt={tool.name}
                    width={44}
                    height={44}
                    className="object-contain w-full h-full rounded-full"
                    unoptimized
                  />
                  {/* Hover Tooltip */}
                  <span className="absolute -bottom-7 px-2 py-0.5 rounded-md bg-[#030014]/90 border border-cyan-500/50 text-[10px] text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* 3. INNER ORBIT (Core Analytics: Python, Tableau, MySQL)        */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute w-[44%] h-[44%] rounded-full border border-purple-400/40 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-dashed border-cyan-300/30" />
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[44%] h-[44%] rounded-full pointer-events-none"
      >
        {INNER_TOOLS.map((tool) => {
          const rad = (tool.angle * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);

          return (
            <div
              key={tool.name}
              style={{
                top: `${y}%`,
                left: `${x}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 26,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className={`relative group flex items-center justify-center w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white p-2.5 border-2 ${tool.borderGlow} ${tool.glow} shadow-xl hover:scale-125 transition-transform duration-300 cursor-pointer overflow-hidden`}
                >
                  <Image
                    src={`/skills/${tool.src}`}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full rounded-full"
                    unoptimized
                  />
                  {/* Hover Tooltip */}
                  <span className="absolute -bottom-7 px-2 py-0.5 rounded-md bg-[#030014]/90 border border-purple-500/50 text-[10px] text-cyan-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* 4. CENTER CORE (Primary Anchor: Power BI)                     */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-30"
      >
        {/* Core Halo Glow */}
        <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl animate-pulse" />
        <div
          onMouseEnter={() => setHoveredTool("Power BI")}
          onMouseLeave={() => setHoveredTool(null)}
          className="relative group flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white p-3.5 border-3 border-amber-400 shadow-[0_0_30px_rgba(242,200,17,0.7)] hover:scale-115 transition-transform duration-300 cursor-pointer overflow-hidden"
        >
          <Image
            src="/skills/powerbi.jpg"
            alt="Power BI"
            width={80}
            height={80}
            className="object-contain w-full h-full rounded-full"
            unoptimized
          />
          {/* Tooltip */}
          <span className="absolute -bottom-8 px-2.5 py-0.5 rounded-md bg-[#030014]/90 border border-amber-400/60 text-xs text-amber-300 font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            Power BI (Core)
          </span>
        </div>
      </motion.div>
    </div>
  );
};
