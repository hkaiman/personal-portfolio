"use client";

import { title, subtitle, description } from "@/components/primitives";
import React from "@/components/icons/React";
import Flutter from "@/components/icons/Flutter";
import Java from "@/components/icons/Java";
import Laravel from "@/components/icons/Laravel";
import MySQL from "@/components/icons/MySQL";
import Firebase from "@/components/icons/Firebase";
import { SkillCard } from "@/components/SkillCard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Skeleton,
} from "@nextui-org/react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCard";

const ProjectDetails = [
  {
    name: "Personal Portfolio",
    date: "January 2024",
    description: "A personal portfolio site created using Next.js",
    url: "https://reactjs.org/",
    image: <React width={50} height={50} />,
    tech: ["Next.js", "NextUI", "Framer Motion"],
  },
  {
    name: "Household Management System",
    date: "June 2023 - December 2023",
    description: "A mobile application developed to help households manage and streamline chores while fostering community engagement among members.",
    url: "https://github.com/heykarlz/household_management_system",
    image: "/img/household.png",
    tech: ['Flutter', 'Firebase'],
  },
  {
    name: "Mockup Cinema Booking System",
    date: "September 2022 - October 2022",
    description: "A cinema booking system designed to enable users to seamlessly reserve movie tickets and administrators to efficiently manage ticket operations.",
    url: "https://reactjs.org/",
    image: "/img/syne.png",
    tech: ['Java SE', 'Servlet', 'JavaScript'],
  },
  {
    name: "Mockup School Management System",
    date: "September 2022 - October 2022",
    description: "A school management system tailored for streamlined student registration and effective teacher management.",
    url: "https://reactjs.org/",
    image: "/img/school.png",
    tech: ['Java SE', 'Servlet', 'JavaScript', 'ChartJS'],
  },
  {
    name: "Gaming Store System",
    date: "September 2021",
    description: "A gaming store system which enable user to buy games and make payment.",
    url: "/img/gx.png",
    image: "/img/gx.png",
    tech: ['Java Swing', 'Netbeans GUI'],
  },
];

const Projects = () => {
  return (
    <section className="text-center justify-center gap-4 py-4 md:py-10">
      <div className="items-center inline-block max-w-lg text-center justify-center mb-10">
        <h2 className={title({ size: "lg" })}>Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-12">
        {ProjectDetails.map((project, index) => (
          <Col key={index} xs={12} md={4}>
            <ProjectCard
              name={project.name}
              date={project.date}
              description={project.description}
              url={project.url}
              image={project.image}
              techs={project.tech}
            />
          </Col>
        ))}
      </div>
    </section>
  );
};

export default Projects;
