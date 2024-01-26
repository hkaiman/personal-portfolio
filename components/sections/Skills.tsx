"use client";

import { title, subtitle, description } from "@/components/primitives";
import  Git  from "@/components/icons/Git";
import React from "@/components/icons/React";
import Flutter from "@/components/icons/Flutter";
import Java from "@/components/icons/Java";
import Laravel from "@/components/icons/Laravel";
import MySQL from "@/components/icons/MySQL";
import Firebase from "@/components/icons/Firebase";
import { SkillCard } from "@/components/SkillCard";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Container, Row, Col } from "react-bootstrap";

const ProgrammingSkills = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    url: "https://reactjs.org/",
    image: <React width={100} height={100} />,
    level: 7,
  },
  {
    name: "Flutter",
    description: "A JavaScript library for building user interfaces",
    url: "https://reactjs.org/",
    image: <Flutter width={100} height={100} />,
    level: 7,
  },
  {
    name: "Firebase",
    description: "A JavaScript library for building user interfaces",
    url: "https://reactjs.org/",
    image: <Firebase width={100} height={100} />,
    level: 7,
  },
  {
    name: "Laravel",
    description: "A JavaScript library for building user interfaces",
    url: "https://reactjs.org/",
    image: <Laravel width={100} height={100} />,
    level: 7,
  },
  {
    name: "MySQL",
    description:
      "MySQL is an open-source relational database management system.",
    url: "https://www.mysql.com/",
    image: <MySQL width={100} height={100} />,
    level: 5,
  },
  {
    name: "Java",
    description:
      "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    url: "https://www.java.com/en/",
    image: <Java width={100} height={100} />,
    level: 5,
  },
  {
    name: "Git",
    description:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    url: "https://git-scm.com/",
    image: <Git width={100} height={100} />,
    level: 5,
  },
];

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
      <div className="flex items-center inline-block max-w-lg text-center justify-center mb-10">
        <h2 className={title({ size: "lg" })}>Skills</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 md:grid-cols-4 gap-x-10 gap-y-10">
        {
          ProgrammingSkills.map((skill, index) => (
            <Col key={index} xs={12} md={4}>
              <SkillCard
                name={skill.name}
                description={skill.description}
                url={skill.url}
                image={skill.image}
                level={skill.level}
              />
            </Col>
          ))
        }
      </div>
    </section>
  );
};

export default Skills;
