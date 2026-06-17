import { defineStackbitConfig } from "@stackbit/types";

// Netlify Visual Editor content source.
// Site owners should edit content in /content/*.json, not inside index.html or script.js.
export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "20",
  devCommand: "npm run dev",
  contentSources: [
    {
      type: "files",
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "SiteContent",
          type: "data",
          filePath: "content/site.json",
          label: "Site Copy",
          fields: [
            { name: "brand", type: "object", label: "Brand", fields: [
              { name: "artistName", type: "string" },
              { name: "domain", type: "string" },
              { name: "tagline", type: "string" },
              { name: "footerLine", type: "string" }
            ] },
            { name: "hero", type: "object", label: "Hero", fields: [
              { name: "eyebrow", type: "string" },
              { name: "title", type: "string" },
              { name: "headline", type: "string" },
              { name: "copy", type: "text" },
              { name: "primaryCta", type: "string" },
              { name: "secondaryCta", type: "string" },
              { name: "tertiaryCta", type: "string" },
              { name: "microcopy", type: "string" },
              { name: "sideNote", type: "string" }
            ] },
            { name: "about", type: "object", label: "About", fields: [
              { name: "eyebrow", type: "string" },
              { name: "title", type: "string" },
              { name: "visualSmall", type: "string" },
              { name: "visualLarge", type: "string" },
              { name: "paragraphs", type: "list", items: { type: "text" } },
              { name: "detailsTitle", type: "string" },
              { name: "detailsParagraphs", type: "list", items: { type: "text" } }
            ] }
          ]
        },
        {
          name: "Music",
          type: "data",
          filePath: "content/music.json",
          label: "Music Cards",
          fields: [
            { name: "songs", type: "list", items: { type: "object", fields: [
              { name: "title", type: "string" },
              { name: "description", type: "text" },
              { name: "mood", type: "string" },
              { name: "image", type: "image" },
              { name: "stream", type: "url" },
              { name: "lyrics", type: "url" },
              { name: "releaseDate", type: "string" },
              { name: "story", type: "text" },
              { name: "lyricsExcerpt", type: "text" },
              { name: "video", type: "url" },
              { name: "relatedMerch", type: "string" }
            ] } }
          ]
        },
        {
          name: "Quotes",
          type: "data",
          filePath: "content/quotes.json",
          label: "Quotes",
          fields: [
            { name: "categories", type: "list", items: { type: "string" } },
            { name: "quotes", type: "list", items: { type: "object", fields: [
              { name: "text", type: "text" },
              { name: "category", type: "string" }
            ] } }
          ]
        },
        {
          name: "Merch",
          type: "data",
          filePath: "content/merch.json",
          label: "Merch Products",
          fields: [
            { name: "categories", type: "list", items: { type: "string" } },
            { name: "products", type: "list", items: { type: "object", fields: [
              { name: "name", type: "string" },
              { name: "category", type: "string" },
              { name: "image", type: "image" },
              { name: "front", type: "string" },
              { name: "sleeve", type: "string", required: false },
              { name: "back", type: "string", required: false },
              { name: "description", type: "text" },
              { name: "price", type: "string" }
            ] } }
          ]
        },
        {
          name: "CommunityWall",
          type: "data",
          filePath: "content/wall.json",
          label: "Community Wall",
          fields: [
            { name: "statements", type: "list", items: { type: "string" } },
            { name: "posts", type: "list", items: { type: "object", fields: [
              { name: "name", type: "string" },
              { name: "mood", type: "string" },
              { name: "message", type: "text" },
              { name: "song", type: "string" },
              { name: "time", type: "string" }
            ] } }
          ]
        },
        {
          name: "Media",
          type: "data",
          filePath: "content/media.json",
          label: "Videos and Clips",
          fields: [
            { name: "videos", type: "list", items: { type: "object", fields: [
              { name: "title", type: "string" },
              { name: "caption", type: "text" }
            ] } },
            { name: "clips", type: "list", items: { type: "object", fields: [
              { name: "title", type: "string" },
              { name: "caption", type: "text" },
              { name: "song", type: "string" },
              { name: "transcript", type: "text" }
            ] } }
          ]
        },
        {
          name: "FAQ",
          type: "data",
          filePath: "content/faq.json",
          label: "FAQ",
          fields: [
            { name: "items", type: "list", items: { type: "object", fields: [
              { name: "question", type: "string" },
              { name: "answer", type: "text" }
            ] } }
          ]
        },
        {
          name: "SocialLinks",
          type: "data",
          filePath: "content/social.json",
          label: "Social Links",
          fields: [
            { name: "links", type: "list", items: { type: "object", fields: [
              { name: "label", type: "string" },
              { name: "url", type: "url" }
            ] } }
          ]
        },
        {
          name: "Rotator",
          type: "data",
          filePath: "content/rotator.json",
          label: "Rotating Lines",
          fields: [
            { name: "lines", type: "list", items: { type: "string" } }
          ]
        },
        {
          name: "Translations",
          type: "data",
          filePath: "content/i18n.json",
          label: "Translations",
          fields: [
            { name: "en", type: "json" },
            { name: "es", type: "json" }
          ]
        }
      ]
    }
  ],
  assets: {
    referenceType: "static",
    staticDir: "assets",
    uploadDir: "assets",
    publicPath: "/assets"
  }
});
