"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.08;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[#7042f840] backdrop-blur-md hover:border-[#7042f8] hover:scale-105 hover:shadow-lg hover:shadow-[#7042f840] transition-all duration-300 group cursor-pointer"
    >
      <div className="w-[65px] h-[65px] rounded-xl overflow-hidden bg-white/95 p-1.5 flex items-center justify-center shadow-md group-hover:bg-white transition-colors">
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          className="object-contain w-full h-full"
          unoptimized
        />
      </div>
      <span className="text-xs font-medium text-gray-300 mt-2 text-center group-hover:text-cyan-400 transition-colors whitespace-nowrap px-1">
        {name}
      </span>
    </motion.div>
  );
};
