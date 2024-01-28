import { title, subtitle, description } from "@/components/primitives";
import React from "@/components/icons/React";
import { getPages } from "@/config/notion";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../cards/BlogCard";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
const Blogs = async () => {
  const articles = await getPages();

  return (
    <section className="text-center justify-center">
      <div className="items-center inline-block max-w-lg text-center justify-center mb-10">
        <h2 className={title()}>Blog</h2>
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-12">
        {articles.length == 0 && (
          <div className="mt-10">
            <h1 className={subtitle()}>It seems that the author is having a rest..</h1>
          </div>
        )}
        {articles.map((article, index) => {
          const formattedDate = article.properties?.Date?.date.start
            ? new Date(article.properties.Date.date.start).toLocaleDateString(
                "en-US",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )
            : "N/A";
          const slug =
            article.properties?.Slug?.rich_text[0]?.text.content || "";
          return (
            <Link key={index} href={`/blog/${slug}`} color="foreground" className="block">
              <Col key={index} xs={12} md={4}>
                {index > 0 && (
                  <Divider
                    style={{ borderBottom: "1px solid #ccc" }}
                    className="mb-10"
                  />
                )}
                <BlogCard
                  title={
                    article.properties?.Title?.title[0]?.plain_text ||
                    "Untitled"
                  }
                  date={formattedDate}
                  description={
                    article.properties?.Description?.rich_text[0]?.text
                      .content || ""
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
