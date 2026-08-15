"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const SKILL_CATEGORIES = [
  {
    title: "Data Visualization & Dashboards",
    skills: ["Power BI", "Tableau", "DAX", "Excel"],
  },
  {
    title: "Programming & Databases",
    skills: ["Python", "SQL", "MySQL"],
  },
  {
    title: "Cloud & Analytics Platforms",
    skills: ["AWS", "Microsoft Azure", "Microsoft Fabric"],
  },
  {
    title: "Process Automation",
    skills: ["N8N", "Power Automate", "make.com"],
  },
  {
    title: "Prompt Engineering",
    skills: ["AI-powered analysis", "Reporting automation", "Decision support"],
  },
  {
    title: "Financial & Business Acumen",
    skills: ["Reconciliation", "KPI reporting", "Stakeholder communication"],
  },
];

export default function AboutPage() {
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
          <h1 className="Welcome-text text-[13px]">About Me</h1>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12 text-center"
        >
          Get to Know Me
        </motion.h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full mb-16">
          {/* Photo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.5)}
            className="flex-shrink-0"
          >
            <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-[#7042f88b] shadow-lg shadow-[#7042f861]">
              <Image
                src="/profile.png"
                alt="Amit Dwivedi"
                fill
                className="object-cover"
              />
            </div>
            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              <Link
                href="https://www.linkedin.com/in/amitofficial1807/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#7042f88b] text-gray-300 hover:text-white hover:border-[#7042f8] transition-all duration-300"
              >
                <RxLinkedinLogo className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/mrraj1807-max"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#7042f88b] text-gray-300 hover:text-white hover:border-[#7042f8] transition-all duration-300"
              >
                <RxGithubLogo className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </Link>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.5)}
            className="flex flex-col gap-4 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              Aspiring Data Analyst and Business Analyst with 2+ years of
              hands-on experience in accounting & financial reporting, I bridge
              the gap between financial precision and data-driven strategy.
            </p>
            <p className="text-lg leading-relaxed">
              I built my data foundation through a Professional Certificate in
              Business Analytics & Consulting (upGrad, in partnership with PwC
              India), along with a hands-on virtual Data Analyst internship with
              AtliQ Technologies, where I worked through real business case
              studies across telecom, supply chain, retail, and finance.
            </p>
            <p className="text-lg leading-relaxed">
              Along the way, I&apos;ve come to genuinely enjoy turning messy, raw
              data into dashboards and insights people can actually act on — and
              I&apos;m always looking for smarter, faster ways to get there.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.7)}
          className="text-[30px] font-semibold text-white mb-8"
        >
          Here&apos;s what I bring to the table:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full mb-16">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.5 + i * 0.15)}
              className="p-6 rounded-xl border border-[#7042f88b] bg-[rgba(3,0,20,0.5)] backdrop-blur-sm hover:border-[#7042f8] transition-all duration-300"
            >
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold text-lg mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm text-gray-300 rounded-full border border-[#7042f840] bg-[rgba(112,66,248,0.08)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1.2)}
          className="text-center"
        >
          <p className="text-xl text-gray-300 mb-6">
            Open to Data Analyst and Business Analyst opportunities — feel free
            to connect!
          </p>
          <Link
            href="/contact"
            className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg inline-block"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
