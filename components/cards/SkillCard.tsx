import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type SkillContentType =
  | "React"
  | "Flutter"
  | "Firebase"
  | "Laravel"
  | "MySQL"
  | "Java"
  | "Git";

const colorMappings: Record<SkillContentType, string[]> = {
  React: ["#61DAFB", "#282C34"],
  Flutter: ["#87CEEB", "#1E90FF"],
  Firebase: ["#FFD700", "#FFA500"],
  Laravel: ["#FF6347", "#8B0000"],
  MySQL: ["#1E90FF", "#FFA500", "#000080"],
  Java: ["#FFA500", "#87CEEB"],
  Git: ["#F05032", "#F05032"],
};

interface SkillCardProps {
  name: string;
  description: string;
  shortUrl: string;
  url: string;
  image: React.ReactNode | string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  name,
  description,
  shortUrl,
  url,
  image,
}) => {
  const gradientColors = (content: SkillContentType): string[] =>
    colorMappings[content] || ["#000000", "#000000"];
  const colors = gradientColors(name as SkillContentType);
  return (
    <Card
      isPressable
      className="max-w-[400px] p-3"
      style={{
        borderTop: `2px solid`,
        borderImage: `linear-gradient(to right, ${colors.join(", ")})`,
        borderImageSlice: 1,
      }}
    >
      <CardHeader className="flex gap-3">
        {image?.toLocaleString() === "[object Object]" ? (
          image
        ) : (
          <Image
            src={image?.toLocaleString() || ""}
            alt={description}
            height={100}
            width={100}
          />
        )}
      </CardHeader>
      <CardBody className="mt-5">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="text-2xl font-bold mr-2">{name}</p>
            <ArrowUpRightIcon className="h-4 w-4 mt-2 text-default-500" />
          </div>
          <p className="text-small text-default-500">{shortUrl}</p>
        </div>
        <p className="mt-3 text-default-500">{description}</p>
      </CardBody>
    </Card>
  );
};

export default SkillCard;
