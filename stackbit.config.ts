import { defineStackbitConfig, type SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

const objectFields = {
  seo: [
    { type: "string", name: "title", required: true },
    { type: "text", name: "description", required: true },
    { type: "string", name: "image" }
  ],
  artist: [
    { type: "string", name: "name", required: true },
    { type: "string", name: "tagline" },
    { type: "string", name: "footerLine" }
  ],
  hero: [
    { type: "string", name: "headline", required: true },
    { type: "text", name: "subheadline" },
    { type: "string", name: "primaryCta" },
    { type: "string", name: "secondaryCta" },
    { type: "string", name: "thirdCta" },
    { type: "string", name: "microcopy" }
  ],
  titleBlock: [
    { type: "string", name: "title", required: true },
    { type: "text", name: "subheadline" },
    { type: "text", name: "copy" },
    { type: "string", name: "cta" }
  ],
  song: [
    { type: "string", name: "title", required: true },
    { type: "text", name: "description" },
    { type: "string", name: "tag" }
  ],
  merchItem: [
    { type: "string", name: "artifact" },
    { type: "string", name: "name", required: true },
    { type: "string", name: "front" },
    { type: "string", name: "back" },
    { type: "text", name: "description" },
    { type: "string", name: "price" }
  ],
  wallPost: [
    { type: "string", name: "name" },
    { type: "string", name: "mood" },
    { type: "text", name: "message" },
    { type: "string", name: "song" }
  ],
  faqItem: [
    { type: "string", name: "q", required: true },
    { type: "text", name: "a", required: true }
  ]
};

const models = [
  { name: "Seo", type: "object", fields: objectFields.seo },
  { name: "Artist", type: "object", fields: objectFields.artist },
  { name: "Hero", type: "object", fields: objectFields.hero },
  { name: "TitleBlock", type: "object", fields: objectFields.titleBlock },
  { name: "Song", type: "object", fields: objectFields.song },
  { name: "MerchItem", type: "object", fields: objectFields.merchItem },
  { name: "WallPost", type: "object", fields: objectFields.wallPost },
  { name: "FaqItem", type: "object", fields: objectFields.faqItem },
  {
    name: "HomePage",
    type: "page",
    urlPath: "/",
    filePath: "src/data/site.json",
    fields: [
      { type: "string", name: "type", const: "HomePage" },
      { type: "string", name: "id" },
      { type: "string", name: "canonicalUrl" },
      { type: "model", name: "seo", models: ["Seo"] },
      { type: "model", name: "artist", models: ["Artist"] },
      { type: "list", name: "nav", items: { type: "string" } },
      { type: "model", name: "hero", models: ["Hero"] },
      { type: "model", name: "manifesto", models: ["TitleBlock"] },
      { type: "model", name: "songs", models: ["TitleBlock"] },
      { type: "model", name: "connection", models: ["TitleBlock"] },
      { type: "model", name: "signup", models: ["TitleBlock"] },
      { type: "model", name: "about", models: ["TitleBlock"] },
      { type: "model", name: "videos", models: ["TitleBlock"] },
      { type: "model", name: "quotes", models: ["TitleBlock"] },
      { type: "model", name: "merch", models: ["TitleBlock"] },
      { type: "model", name: "wall", models: ["TitleBlock"] },
      { type: "model", name: "rotator", models: ["TitleBlock"] },
      { type: "model", name: "clips", models: ["TitleBlock"] },
      { type: "model", name: "momentum", models: ["TitleBlock"] },
      { type: "model", name: "support", models: ["TitleBlock"] },
      { type: "model", name: "contact", models: ["TitleBlock"] },
      { type: "model", name: "faq", models: ["TitleBlock"] }
    ]
  }
];

export default defineStackbitConfig({
  stackbitVersion: "~0.7.0",
  ssgName: "astro",
  nodeVersion: "20",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/data"],
      models,
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "assets/uploads",
        publicPath: "/"
      }
    })
  ],
  siteMap: ({ documents }): SiteMapEntry[] =>
    documents
      .filter((document) => document.modelName === "HomePage")
      .map((document) => ({ label: "MIXED3MOTIONZ Home", urlPath: "/", document }))
});
