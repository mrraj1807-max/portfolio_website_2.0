"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const CONTACT_ITEMS = [
  {
    icon: FaPhone,
    label: "Mobile",
    value: "+91 9211411806",
    href: "tel:+919211411806",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "mr.raj.1807@gmail.com",
    href: "mailto:mr.raj.1807@gmail.com",
  },
  {
    icon: RxLinkedinLogo,
    label: "LinkedIn",
    value: "linkedin.com/in/amitofficial1807",
    href: "https://www.linkedin.com/in/amitofficial1807/",
  },
  {
    icon: RxGithubLogo,
    label: "GitHub",
    value: "github.com/mrraj1807-max",
    href: "https://github.com/mrraj1807-max",
  },
];

export default function ContactPage() {
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
          <h1 className="Welcome-text text-[13px]">Get In Touch</h1>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 text-center"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.5)}
          className="text-lg text-gray-400 mb-16 text-center max-w-xl"
        >
          Open to Data Analyst and Business Analyst opportunities. Feel free to
          reach out — I&apos;d love to connect!
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full mb-16">
          {CONTACT_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial="hidden"
              animate="visible"
              variants={
                i % 2 === 0
                  ? slideInFromLeft(0.5 + i * 0.15)
                  : slideInFromRight(0.5 + i * 0.15)
              }
            >
              <Link
                href={item.href}
                target={
                  item.label === "LinkedIn" || item.label === "GitHub"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.label === "LinkedIn" || item.label === "GitHub"
                    ? "noreferrer noopener"
                    : undefined
                }
                className="flex items-center gap-5 p-6 rounded-xl border border-[#7042f88b] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm hover:border-[#7042f8] hover:shadow-lg hover:shadow-[#7042f830] transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300">
                    {item.value}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Message */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1.2)}
          className="text-center max-w-lg"
        >
          <div className="p-8 rounded-xl border border-[#7042f88b] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Let&apos;s Work Together
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you have a data analysis project in mind, need insights
              from your business data, or just want to say hello — I&apos;m
              always open to new opportunities and conversations.
            </p>
            <Link
              href="mailto:mr.raj.1807@gmail.com"
              className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg inline-block"
            >
              Send an Email
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
