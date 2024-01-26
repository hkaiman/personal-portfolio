import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  description: string;
  url: string;
  image: React.ReactNode | string;
  level?: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  name,
  description,
  url,
  image,
  level,
}) => {
  return (
    <>
     {/* <Card isFooterBlurred radius="lg" className="border-none"> */}
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
      {/* <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter> */}
    {/* </Card> */}
    </>
  );

  return (
    <Card
      isBlurred
      isPressable
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[200px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
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
          </div>

          {/* <div className="flex flex-col col-span-6 md:col-span-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold text-foreground/90">{name}</h3>
            </div>
          </div>
        </div> */}
        </div>
      </CardBody>
    </Card>
  );
};

// SkillCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   level: PropTypes.number.isRequired,
// };

export default SkillCard;
