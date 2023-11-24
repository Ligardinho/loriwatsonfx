"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Welcome to my portfolio website! I am a <span className="font-bold">cryptocurrency</span> and <span className="font-bold">forex trader</span> with years of experience in the industry. 
        <span className="font-bold"> My goal</span> is to help you navigate the exciting and ever-changing world of digital currencies and forex trading.
        My portfolio website is designed to showcase my expertise in the industry and provide you with valuable insights into the world of cryptocurrency and forex trading. 
        Whether you're a beginner or an experienced trader,<br/> <span className="font-bold">I am here to help you turn your knowledge into profits.</span>
      </p>

      <p>
        I am passionate about helping others succeed in the industry and believe that magic comes from the continuous sharing of one's 
        journey and the collective wisdom of learning from peers. I welcome entrepreneurs of every sector, culture, industry, and geography 
        into my network of leaders who drive the world forward. <span className="font-bold">Join me, and together, we will grow.</span>
      </p>
    </motion.section>
  );
}
