import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Slider,
  Image,
  Button,
  Link,
  Divider,
  Chip,
  Skeleton,
} from "@nextui-org/react";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Code from "@/components/icons/Code";

interface ProjectCardProps {
  name: string;
  date: string;
  description: string;
  url: string;
  image: React.ReactNode | string;
  techs: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  date,
  description,
  url,
  image,
  techs,
}) => {
  const [hydrationLoad, setHydrationLoad] = useState(true);

  useEffect(() => {
    setHydrationLoad(false);
  }, []);

  return hydrationLoad ? (
    <Card className="w-full p-5 relative space-y-5 overflow-hidden" radius="lg">
      <div className="max-w-[300px] w-full flex items-center gap-3">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      <div className="max-w-[300px] w-full flex flex-row gap-5">
        <Skeleton className="h-8 w-3/5 rounded-lg" />
        <Skeleton className="h-8 w-3/5 rounded-lg" />
        <Skeleton className="h-8 w-3/5 rounded-lg" />
      </div>
      <div className="max-w-[300px] w-full flex flex-row gap-5">
        <Skeleton className="h-10 w-3/5 rounded-lg" />
        <Skeleton className="h-10 w-3/5 rounded-lg" />
      </div>
    </Card>
  ) : (
    <Card isPressable className="w-full p-5 relative overflow-hidden">
      <CardHeader className="flex gap-3 relative z-10">
        {image?.toLocaleString() === "[object Object]" ? (
          image
        ) : (
          <Image
            src={image?.toLocaleString() || ""}
            alt={description}
            height={50}
            width={50}
          />
        )}
        <div className="flex flex-col">
          <p className="text-sm lg:text-lg md:text-lg text-left">{name}</p>
          <p className="text-small text-default-500 text-left">{date}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <CardBody>
        <Row xs={12} md={4}>
          {techs.map((tech, index) => (
            <Button
              key={index}
              color="primary"
              variant="flat"
              size="sm"
              className={`mb-2 md:mb-0 ${
                index !== 0 ? "md:mr-2 ml-1" : "md:mr-2"
              }`}
            >
              {tech}
            </Button>
          ))}
        </Row>
      </CardBody>
      <CardFooter>
        <Button
          color="primary"
          href={url}
          as={Link}
          variant="ghost"
          size="lg"
          showAnchorIcon
          anchorIcon={<Code />}
        >
          Source Code
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
