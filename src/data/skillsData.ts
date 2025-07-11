import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import js from "../assets/skills/javascript.svg";
import ts from "../assets/skills/typescript.svg";
import php from "../assets/skills/php.svg";
import python from "../assets/skills/python.svg";
import docker from "../assets/skills/docker.svg";
import postman from "../assets/skills/postman.svg";
import mysql from "../assets/skills/msql.svg";
import express from "../assets/skills/express.svg";
import nodejs from "../assets/skills/nodejs.svg";
import redux from "../assets/skills/redux.svg";
import laravel from "../assets/skills/Laravel.svg";
import tailwind from "../assets/skills/Tailwind.svg";
import react from "../assets/skills/react.svg";
import gitBlack from "../assets/skills/github-142-svgrepo-com.svg";
import expo from "../assets/skills/expo.svg";

import type { Skill } from "../types/skillTypes";

export const skills: Skill[] = [
  { name: "JavaScript", logo: js },
  { name: "TypeScript", logo: ts },
  { name: "ReactJS/TS", logo: react },
  { name: "Redux", logo: redux },
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "Tailwind CSS", logo: tailwind },
  { name: "Node.js", logo: nodejs },
  { name: "Express.js", logo: express },
  { name: "PHP", logo: php },
  { name: "Laravel", logo: laravel },
  { name: "Python", logo: python },
  { name: "MySQL", logo: mysql },
  { name: "Git & GitHub", logo: gitBlack },
  { name: "Docker", logo: docker },
  { name: "Postman", logo: postman },
  { name: "React Native", logo: react },
  { name: "Expo", logo: expo },
];

// export const skillCategories: SkillCategory[] = [
//   {
//     category: "Langages",
//     skills: [
//       { name: "HTML", logo: html },
//       { name: "CSS", logo: css },
//       { name: "JavaScript", logo: js },
//       { name: "TypeScript", logo: ts },
//       { name: "PHP", logo: php },
//       { name: "Python", logo: python },
//     ],
//   },
//   {
//     category: "Frameworks et librairies",
//     subCategories: [
//       {
//         subCategory: "Frontend",
//         skills: [
//           { name: "ReactJS/TS", logo: react },
//           { name: "Next.js", logo: nextjs },
//           { name: "Redux", logo: redux },
//           { name: "Tailwind CSS", logo: tailwind },
//         ],
//       },
//       {
//         subCategory: "Backend",
//         skills: [
//           { name: "Node.js", logo: nodejs },
//           { name: "Express.js", logo: express },
//           { name: "Laravel", logo: laravel },
//           { name: "Django", logo: django },
//         ],
//       },
//     ],
//   },
//   {
//     category: "Bases de données",
//     skills: [{ name: "MySQL", logo: mysql }],
//   },
//   {
//     category: "Mobile",
//     skills: [{ name: "React Native", logo: react }],
//   },
//   {
//     category: "Outils et Environnement",
//     skills: [
//       { name: "VScode", logo: vscode },
//       { name: "Git & GitHub", logo: gitBlack },
//       { name: "Docker", logo: docker },
//       { name: "Postman", logo: postman },
//       { name: "Expo", logo: expo },
//     ],
//   },
// ];
