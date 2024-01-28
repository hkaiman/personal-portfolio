import "server-only";

import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";

interface Article {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: any; 
  last_edited_by: any; 
  cover: any;
  icon: any;
  parent: any; 
  archived: boolean;
  properties: {
    Title: { title: Array<{ plain_text: string }> };
    Date: { date: { start: string } };
    Description: { rich_text: Array<{ text: { content: string } }> };
    Slug: { rich_text: Array<{ text: { content: string } }> };
  };
  url: string;
  public_url: any;
}

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPages = cache(async (): Promise<Article[]> => {
  const response = await notionClient.databases.query({
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "Created time",
        direction: "descending",
      },
    ],
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  return response.results as Article[];
});

export const getPageContent = cache((pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

export const getPageBySlug = cache((slug: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});