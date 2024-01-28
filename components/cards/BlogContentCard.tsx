import Image from "next/image";
import { title as titleStyle } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import Row from "react-bootstrap/esm/Row";
import { Button } from "@nextui-org/button";

interface BlogContentProps {
  title: string;
  bannerImage: string;
  bannerImageWidth: number;
  bannerImageHeight: number;
  content: string;
  date: string;
  tags: string[];
}

export function BlogContentCard(props: BlogContentProps) {
  const {
    title,
    content,
    bannerImage,
    bannerImageWidth,
    bannerImageHeight,
    date,
    tags
  } = props;

  return (
    <article className="w-full mb-10 flex flex-col items-center">
      <div className="text-center justify-center mb-10">
        <h1 className={titleStyle()}>{title}</h1>
      </div>
      <Row xs={12} md={4}>
          {tags.map((tag, index) => (
            <Button
              key={index}
              color="primary"
              variant="flat"
              size="md"
              className={`mb-2 md:mb-0 ${
                index !== 0 ? "md:mr-2 ml-1" : "md:mr-2"
              }`}
            >
              {tag}
            </Button>
          ))}
        </Row>
      <div className="text-center justify-center mt-5">
        <p className="text-md text-default-500 text-left font-bold text-lg">
          {date}
        </p>
      </div>
      <Divider className="mt-5" />
      <Image
        alt="Blog Image"
        src={bannerImage}
        // width={bannerImageWidth}
        width={"800"}
        height={bannerImageHeight}
        className="[width: 800px]! mt-10 mb-10"
      />
      <div
        className="text-xl mt-4 max-w-3xl text-justify leading-10 prose prose-p:text-white prose-headings:text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
