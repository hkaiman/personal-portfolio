import { getPageContent, getPageBySlug, notionClient } from "@/config/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

// Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { BlogContentCard } from "@/components/cards/BlogContentCard";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPageBySlug(params.slug);

  // Redirect to not found page if the post is missing
  if (!post) {
    notFound();
  }

  const content = await getPageContent(post.id);

  // Initialize the Notion Renderer
  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));

  // Render the content to HTML
  const html = await notionRenderer.render(...content);

  const rawDate = (post.properties.Date as any).date.start;
  const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Pass fetched data to the client-side component
  return (
    <BlogContentCard
      title={(post.properties.Title as any).title[0].plain_text}
      bannerImage={(post.properties.BannerImage as any).url}
      bannerImageWidth={(post.properties.BannerImageWidth as any).number}
      bannerImageHeight={(post.properties.BannerImageHeight as any).number}
      date={formattedDate}
      tags={(post.properties.Tags as any).multi_select.map((tag: { name: string }) => tag.name)}
      content={html}
    />
  );
}