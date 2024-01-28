import { title, subtitle, description } from "@/components/primitives";
import React from "@/components/icons/React";
import { getPages } from "@/config/notion";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../cards/BlogCard";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

interface Article {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const Blogs: React.FC<{ articles: Article[] }> = ({ articles }) => {

  return (
    <section className="text-center justify-center">
      <div className="items-center inline-block max-w-lg text-center justify-center mb-10">
        <h2 className={title()}>Blog</h2>
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-12">
        {articles.length == 0 && (
          <div className="mt-10">
            <h1 className={subtitle()}>
              It seems that the author is having a rest..
            </h1>
          </div>
        )}
        {articles.map((article, index) => {
          const formattedDate = article.date
            ? new Date(article.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "N/A";
          const slug = article.slug || "";
          return (
            <Link
              key={index}
              href={`/blog/${slug}`}
              color="foreground"
              className="block"
            >
              <Col key={index} xs={12} md={4}>
                {index > 0 && (
                  <Divider
                    style={{ borderBottom: "1px solid #ccc" }}
                    className="mb-10"
                  />
                )}
                <BlogCard
                  title={
                    article.title ||
                    "Untitled"
                  }
                  date={formattedDate}
                  description={
                    article.description || ""
                  }
                />
              </Col>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
