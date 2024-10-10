import HTML from "public/images/skills/html.png";
import CSS from "public/images/skills/css.png";
import JS from "public/images/skills/js.png";
import TS from "public/images/skills/ts.png";
import PY from "public/images/skills/py.png";
import Go from "public/images/skills/go.png";
import Java from "public/images/skills/java.png";
import PHP from "public/images/skills/php.png";
import Dart from "public/images/skills/dart.png";
import ReactJS from "public/images/skills/reactjs.png";
import Vite from "public/images/skills/vite.png";
import NextJS from "public/images/skills/nextjs.png";
import Laravel from "public/images/skills/laravel.png";
import Filament from "public/images/skills/filament.png";
import ExpressJS from "public/images/skills/expressjs.png";
import Flutter from "public/images/skills/flutter.png";
import TailwindCSS from "public/images/skills/tailwindcss.png";

import MySQL from "public/images/skills/mysql.png";
import MongoDB from "public/images/skills/mongodb.png";

import Figma from "public/images/skills/figma.png";

import Git from "public/images/skills/git.png";

import JIRA from "public/images/skills/jira.png";
import Trello from "public/images/skills/trello.png";

/**
 * skills is an array of SkillProps arrays.
 *
 * @see {@link SkillProps}
 */
export const skills: SkillProps[][] = [
  [
    {
      label: "HTML",
      imageUrl: HTML.src,
      favorite: false,
    },
    {
      label: "CSS",
      imageUrl: CSS.src,
      favorite: false,
    },
    {
      label: "JavaScript",
      imageUrl: JS.src,
      favorite: false,
    },
    {
      label: "TypeScript",
      imageUrl: TS.src,
      favorite: true,
    },
    {
      label: "Python",
      imageUrl: PY.src,
      favorite: false,
    },
    {
      label: "Go",
      imageUrl: Go.src,
      favorite: true,
    },
    {
      label: "Java",
      imageUrl: Java.src,
      favorite: true,
    },
    {
      label: "PHP",
      imageUrl: PHP.src,
      favorite: false,
    },
    {
      label: "Dart",
      imageUrl: Dart.src,
      favorite: false,
    },
    {
      label: "ReactJS",
      imageUrl: ReactJS.src,
      favorite: false,
    },
    {
      label: "Vite",
      imageUrl: Vite.src,
      favorite: false,
    },
    {
      label: "NextJS",
      imageUrl: NextJS.src,
      favorite: true,
    },
    {
      label: "Laravel",
      imageUrl: Laravel.src,
      favorite: false,
    },
    {
      label: "Filament",
      imageUrl: Filament.src,
      favorite: false,
    },
    {
      label: "ExpressJS",
      imageUrl: ExpressJS.src,
      favorite: true,
    },
    {
      label: "Flutter",
      imageUrl: Flutter.src,
      favorite: false,
    },
    {
      label: "TailwindCSS",
      imageUrl: TailwindCSS.src,
      favorite: true,
    },
  ],
  [
    {
      label: "MySQL",
      imageUrl: MySQL.src,
      favorite: true,
    },
    {
      label: "MongoDB",
      imageUrl: MongoDB.src,
      favorite: false,
    },
  ],
  [
    {
      label: "Figma",
      imageUrl: Figma.src,
      favorite: true,
    },
  ],
  [
    {
      label: "Git",
      imageUrl: Git.src,
      favorite: true,
    },
  ],
  [
    {
      label: "JIRA",
      imageUrl: JIRA.src,
      favorite: false,
    },
    {
      label: "Trello",
      imageUrl: Trello.src,
      favorite: true,
    },
  ],
];
