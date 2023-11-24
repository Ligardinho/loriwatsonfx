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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Crypto Trading",
  "Forex Trading",
  "Entrepeneur",
  "Leader",
  "Content Creation",
  "Coaching",
  "Course Creator",
  "Influencer",
  "Invester",
  "Car Enthusiast",
] as const;
