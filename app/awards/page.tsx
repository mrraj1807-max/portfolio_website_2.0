"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { CERTIFICATES } from "@/constants";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { useState } from "react";

export default function AwardsPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
          <h1 className="Welcome-text text-[13px]">
            Awards & Certifications
          </h1>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16 text-center"
        >
          Certificates & Achievements
        </motion.h1>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.5 + i * 0.2)}
              className="rounded-xl border border-[#7042f88b] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm overflow-hidden hover:border-[#7042f8] transition-all duration-300 group"
            >
              {/* Certificate Image */}
              <div
                className="relative w-full h-[250px] cursor-pointer overflow-hidden"
                onClick={() => setLightboxImage(cert.image)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                    Click to enlarge
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                  </div>
                  {"badge" in cert && cert.badge && (
                    <div className="flex-shrink-0 ml-4">
                      <Image
                        src={cert.badge}
                        alt="Verified Badge"
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                    </div>
                  )}
                </div>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
            <Image
              src={lightboxImage}
              alt="Certificate"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain"
            />
            <button
              className="absolute -top-10 right-0 text-white text-2xl hover:text-purple-400 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
