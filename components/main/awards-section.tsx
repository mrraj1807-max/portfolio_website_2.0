"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesIcon, TrophyIcon, ArrowTopRightOnSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { CERTIFICATES } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const AwardsSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section
      id="awards"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-20 z-20"
    >
      {/* Header Tag */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-4"
      >
        <TrophyIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Recognitions & Credentials
        </h1>
      </motion.div>

      {/* Section Title */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-14 text-center"
      >
        Awards & Certifications
      </motion.h1>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {CERTIFICATES.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={
              i % 2 === 0
                ? slideInFromLeft(0.4 + i * 0.15)
                : slideInFromRight(0.4 + i * 0.15)
            }
            className="rounded-2xl border border-[#7042f88b] bg-[rgba(3,0,20,0.6)] backdrop-blur-md overflow-hidden hover:border-[#7042f8] hover:shadow-[0_0_25px_rgba(112,66,248,0.35)] transition-all duration-300 group flex flex-col justify-between"
          >
            {/* Certificate Preview Image */}
            <div
              className="relative w-full h-[240px] sm:h-[260px] cursor-pointer overflow-hidden bg-black/40"
              onClick={() => setLightboxImage(cert.image)}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium bg-[#7042f8]/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <SparklesIcon className="w-4 h-4 text-cyan-300" />
                  Click to enlarge
                </span>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  {"badge" in cert && cert.badge && (
                    <div className="flex-shrink-0">
                      <Image
                        src={cert.badge}
                        alt="Verified Badge"
                        width={46}
                        height={46}
                        className="rounded-lg drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                      />
                    </div>
                  )}
                </div>

                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium text-sm mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 mb-3">{cert.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-purple-900/40 flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  Verified Credential
                </span>
                <button
                  onClick={() => setLightboxImage(cert.image)}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                >
                  View Certificate
                  <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full rounded-2xl overflow-hidden border border-[#7042f8] bg-[#030014] p-2 shadow-[0_0_50px_rgba(112,66,248,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-red-500/80 text-white rounded-full p-2 backdrop-blur-md transition-all duration-200"
                onClick={() => setLightboxImage(null)}
                aria-label="Close Preview"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="relative w-full h-[60vh] sm:h-[75vh]">
                <Image
                  src={lightboxImage}
                  alt="Certificate Enlarge"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
