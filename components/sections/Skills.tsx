"use client";

import { title, subtitle, description } from "@/components/primitives";
import Git from "@/components/icons/Git";
import React from "@/components/icons/React";
import Flutter from "@/components/icons/Flutter";
import Java from "@/components/icons/Java";
import Laravel from "@/components/icons/Laravel";
import MySQL from "@/components/icons/MySQL";
import Firebase from "@/components/icons/Firebase";
import { SkillCard } from "@/components/cards/SkillCard";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@nextui-org/link";

const size = 60;

const ProgrammingSkills = [
  {
    name: "React",
    description:
      "Open-source JavaScript library for building user interfaces or UI components",
    shortUrl: "react.dev",
    url: "https://react.dev/",
    image: <React width={size} height={size} />,
  },
  {
    name: "Flutter",
    description:
      "Open-source UI software development toolkit created by Google.",
    shortUrl: "flutter.dev",
    url: "https://flutter.dev/",
    image: <Flutter width={size} height={size} />,
  },
  {
    name: "Firebase",
    description:
      "Comprehensive mobile and web application development platform managed by Google.",
    shortUrl: "firebase.google.com",
    url: "https://firebase.google.com/",
    image: <Firebase width={size} height={size} />,
  },
  {
    name: "Laravel",
    description:
      "An open source PHP web framework with expressive, elegant syntax.",
    shortUrl: "laravel.com",
    url: "https://laravel.com/",
    image: <Laravel width={size} height={size} />,
  },
  {
    name: "MySQL",
    description:
      "Open-source relational database management system that uses Structured Query Language..",
    shortUrl: "mysql.com",
    url: "https://www.mysql.com/",
    image: <MySQL width={size} height={size} />,
  },
  {
    name: "Java",
    description:
      "A high-level, object-oriented programming language developed by Sun Microsystems.",
    shortUrl: "java.com",
    url: "https://www.java.com/en/",
    image: <Java width={size} height={size} />,
  },
  {
    name: "Git",
    description:
      "A distributed version control system for tracking code changes during software development",
    shortUrl: "git-scm.com",
    url: "https://git-scm.com/",
    image: <Git width={size} height={size} />,
  },
];

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
      <div className="flex items-center inline-block max-w-lg text-center justify-center mb-10 mt-5">
        <h2 className={title({ size: "lg" })}>Skills</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-x-10 gap-y-10">
        {ProgrammingSkills.map((skill, index) => (
          <Link key={index} isExternal href={skill.url} color="foreground" className="block">
            <Col key={index} xs={12} md={4}>
              <SkillCard
                name={skill.name}
                description={skill.description}
                shortUrl={skill.shortUrl}
                url={skill.url}
                image={skill.image}
              />
            </Col>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Skills;
