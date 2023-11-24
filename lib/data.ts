import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Get Started",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Introduction Phase",
    description:
      "DM me on Instagram to understand how I work and what you'll be learning.",
    icon: React.createElement(MdOutlineMessage),
    date: "Step 1",
  },
  {
    title: "Learning Phase",
    description:
      "Study the knowledge I've given you diligently. Use my tips and tricks to understand the markets.",
    icon: React.createElement(LuGraduationCap),
    date: "Step 2",
  },
  {
    title: "Earning Phase",
    description:
      "Start earning cold, hard cash using the information I've given you. Navigate the markets with ease.",
    icon: React.createElement(FaMoneyBillWave),
    date: "Step 3",
  },
] as const;

export const projectsData = [
  {
    title: "TikTok",
    description:
      "I discuss various money-making topics on my TikTok account. Gathered an audience of 11.7k followers in a matter of years.",
    tags: ["Trading", "Cars", "Money", "Success", "Hard Work"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Instagram",
    description:
      "I post various types of content on Instagram. Gathered an audience of 17.4k followers in a matter of years.",
    tags: ["Trading", "Cars", "Money", "Success", "Hard Work"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Crypto Trading",
  "Forex Trading",
  "Entrepreneur",
  "Leader",
  "Content Creation",
  "Coaching",
  "Course Creator",
  "Influencer",
  "Investor",
  "Car Enthusiast",
] as const;
