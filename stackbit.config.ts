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
  movementPillar: [
    { type: "string", name: "title", required: true },
    { type: "text", name: "description" }
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
    { type: "string", name: "price" },
    { type: "image", name: "image" }
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
  ],
  links: [
    { type: "string", name: "spotify" },
    { type: "string", name: "appleMusic" },
    { type: "string", name: "soundcloud" },
    { type: "string", name: "youtube" },
    { type: "string", name: "instagram" },
    { type: "string", name: "tiktok" }
  ]
};

const models = [
  { name: "Seo", type: "object", fields: objectFields.seo },
  { name: "Artist", type: "object", fields: objectFields.artist },
  { name: "Hero", type: "object", fields: objectFields.hero },
  { name: "TitleBlock", type: "object", fields: objectFields.titleBlock },
  { name: "MovementPillar", type: "object", fields: objectFields.movementPillar },
  { name: "Song", type: "object", fields: objectFields.song },
  { name: "MerchItem", type: "object", fields: objectFields.merchItem },
  { name: "WallPost", type: "object", fields: objectFields.wallPost },
  { name: "FaqItem", type: "object", fields: objectFields.faqItem },
  { name: "Links", type: "object", fields: objectFields.links },
  {
    name: "ManifestoSection",
    type: "object",
    fields: [
      { type: "string", name: "title", required: true },
      { type: "text", name: "copy" },
      { type: "list", name: "pillars", items: { type: "model", models: ["MovementPillar"] } }
    ]
  },
  {
    name: "SongsSection",
    type: "object",
    fields: [
      { type: "string", name: "title", required: true },
      { type: "text", name: "subheadline" },
      { type: "list", name: "items", items: { type: "model", models: ["Song"] } }
    ]
  },
  {
    name: "LineListSection",
    type: "object",
    fields: [
      { type: "string", name: "title", required: true },
      { type: "text", name: "subheadline" },
      { type: "string", name: "cta" },
      { type: "list", name: "lines", items: { type: "string" } },
      { type: "list", name: "items", items: { type: "string" } },
      { type: "list", name: "filters", items: { type: "string" } },
      { type: "list", name: "stats", items: { type: "string" } },
      { type: "list", name: "placeholders", items: { type: "string" } },
      { type: "list", name: "buttons", items: { type: "string" } },
      { type: "list", name: "reasons", items: { type: "string" } }
    ]
  },
  {
    name: "SignupSection",
    type: "object",
    fields: [
      { type: "string", name: "title", required: true },
      { type: "text", name: "subtext" },
      { type: "string", name: "button" },
      { type: "string", name: "trust" },
      { type: "string", name: "support" },
      { type: "text", name: "ownership" }
    ]
  },
  {
    name: "AboutSection",
    type: "object",
    fields: [
      { type: "string", name: "title", required: true },
      { type: "list", name: "copy", items: { type: "text" } },
      { type: "string", name: "cta" },
      { type: "text", name: "fullStory" }
    ]
  },
  {
    name: "QuotesSection",
    type: "object",
    fields: [
      { type: "string", name: "title", required: true },
      { type: "text", name: "subheadline" },
      { type: "list", name: "filters", items: { type: "string" } },
      { type: "list", name: "items", items: { type: "text" } }
    ]
  },
  {
    name: "MerchSection",
    type: "object",
    fields: [
      { type: "string", name: "title", required: true },
      { type: "string", name: "subheadline" },
      { type: "list", name: "categories", items: { type: "string" } },
      { type: "list", name: "scarcity", items: { type: "string" } },
      { type: "list", name: "trust", items: { type: "string" } },
      { type: "list", name: "items", items: { type: "model", models: ["MerchItem"] } }
    ]
  },
  {
    name: "WallSection",
    type: "object",
    fields: [
      { type: "string", name: "title", required: true },
      { type: "string", name: "headline" },
      { type: "text", name: "subheadline" },
      { type: "text", name: "privacy" },
      { type: "text", name: "crisis" },
      { type: "list", name: "rules", items: { type: "string" } },
      { type: "list", name: "moods", items: { type: "string" } },
      { type: "list", name: "posts", items: { type: "model", models: ["WallPost"] } }
    ]
  },
  {
    name: "FaqSection",
    type: "object",
    fields: [
      { type: "string", name: "title", required: true },
      { type: "list", name: "items", items: { type: "model", models: ["FaqItem"] } }
    ]
  },
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
      { type: "model", name: "manifesto", models: ["ManifestoSection"] },
      { type: "model", name: "songs", models: ["SongsSection"] },
      { type: "model", name: "connection", models: ["LineListSection"] },
      { type: "model", name: "signup", models: ["SignupSection"] },
      { type: "model", name: "about", models: ["AboutSection"] },
      { type: "model", name: "videos", models: ["LineListSection"] },
      { type: "model", name: "quotes", models: ["QuotesSection"] },
      { type: "model", name: "merch", models: ["MerchSection"] },
      { type: "model", name: "wall", models: ["WallSection"] },
      { type: "model", name: "rotator", models: ["LineListSection"] },
      { type: "model", name: "clips", models: ["LineListSection"] },
      { type: "model", name: "momentum", models: ["LineListSection"] },
      { type: "model", name: "support", models: ["LineListSection"] },
      { type: "model", name: "contact", models: ["LineListSection"] },
      { type: "model", name: "faq", models: ["FaqSection"] },
      { type: "model", name: "links", models: ["Links"] }
    ]
  }
];

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "20",
  devCommand: "PORT={PORT} node scripts/dev.mjs",
  experimental: {
    ssg: {
      name: "MIXED3MOTIONZ Static Builder",
      logPatterns: {
        up: ["MIXED3MOTIONZ site running"]
      }
    }
  },
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
