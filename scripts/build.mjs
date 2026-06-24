import { copyFileSync, cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const site = JSON.parse(readFileSync(join(root, "src/data/site.json"), "utf8"));
const dist = join(root, "dist");
const objectId = "src/data/site.json";

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, "public"), dist, { recursive: true });
copyFileSync(join(root, "src/styles/site.css"), join(dist, "site.css"));

const esc = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
const attr = (value = "") => esc(value).replace(/`/g, "&#096;");
const field = (path) => `data-sb-field-path="${attr(path)}"`;
const map = (items, fn) => items.map(fn).join("\n");

const schema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: site.artist.name,
  url: site.canonicalUrl,
  genre: ["Cinematic rap", "Alternative rap", "Melodic rap", "Emotional hip-hop"],
  description: site.seo.description,
  track: site.songs.items.map((song) => ({
    "@type": "MusicRecording",
    name: song.title,
    description: song.description,
    byArtist: { "@type": "MusicGroup", name: site.artist.name }
  }))
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: site.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(site.seo.title)}</title>
  <meta name="description" content="${attr(site.seo.description)}" />
  <link rel="canonical" href="${attr(site.canonicalUrl)}" />
  <link rel="stylesheet" href="/site.css" />
  <meta property="og:type" content="music.musician" />
  <meta property="og:title" content="${attr(site.seo.title)}" />
  <meta property="og:description" content="${attr(site.seo.description)}" />
  <meta property="og:image" content="${attr(site.seo.image)}" />
  <meta property="og:url" content="${attr(site.canonicalUrl)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${attr(site.seo.title)}" />
  <meta name="twitter:description" content="${attr(site.seo.description)}" />
  <meta name="theme-color" content="#090909" />
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
</head>
<body>
  <div class="grain" aria-hidden="true"></div>
  <header class="site-header" data-sb-object-id="${objectId}">
    <a class="brand-mark" href="#top" aria-label="MIXED3MOTIONZ home"><span class="m3m-symbol" aria-hidden="true"><i></i><i></i><i></i></span><span ${field("artist.name")}>${esc(site.artist.name)}</span></a>
    <nav class="desktop-nav" aria-label="Primary navigation">${map(site.nav, (item, i) => `<a href="#${esc(item.toLowerCase())}" ${field(`nav.${i}`)}>${esc(item)}</a>`)}</nav>
    <div class="utility-controls" aria-label="Accessibility and language controls"><button class="icon-toggle" data-toggle="motion" aria-pressed="false">Motion</button><button class="icon-toggle" data-toggle="contrast" aria-pressed="false">Contrast</button><button class="icon-toggle" data-toggle="text" aria-pressed="false">Text</button><button class="language-btn" type="button">Español Coming Soon</button></div>
  </header>
  <main id="top" data-sb-object-id="${objectId}">
    <section class="hero section-dark" aria-labelledby="hero-title">
      <div class="hero-copy"><p class="wordmark" ${field("artist.name")}>${esc(site.artist.name)}</p><h1 id="hero-title" ${field("hero.headline")}>${esc(site.hero.headline)}</h1><p class="hero-sub" ${field("hero.subheadline")}>${esc(site.hero.subheadline)}</p><div class="cta-row"><a class="btn primary" href="#music" ${field("hero.primaryCta")}>${esc(site.hero.primaryCta)}</a><a class="btn ghost" href="#wall" ${field("hero.secondaryCta")}>${esc(site.hero.secondaryCta)}</a><a class="btn text-btn" href="#join" ${field("hero.thirdCta")}>${esc(site.hero.thirdCta)}</a></div><p class="microcopy" ${field("hero.microcopy")}>${esc(site.hero.microcopy)}</p></div>
      <div class="hero-visual" aria-hidden="true"><img src="/assets/empty-room.svg" alt="" loading="eager" /><div class="audio-line"><span></span><span></span><span></span><span></span><span></span></div></div>
    </section>
    <section class="manifesto section-paper" id="story" aria-labelledby="manifesto-title"><aside class="section-label">CASE 001 / MOTION</aside><div class="split"><div><h2 id="manifesto-title" ${field("manifesto.title")}>${esc(site.manifesto.title)}</h2><p class="lead" ${field("manifesto.copy")}>${esc(site.manifesto.copy)}</p></div><div class="evidence-grid">${map(site.manifesto.pillars, (p, i) => `<article class="evidence-card"><span>0${i + 1}</span><h3 ${field(`manifesto.pillars.${i}.title`)}>${esc(p.title)}</h3><p ${field(`manifesto.pillars.${i}.description`)}>${esc(p.description)}</p></article>`)}</div></div></section>
    <section class="music section-dark" id="music" aria-labelledby="music-title"><aside class="section-label">ARCHIVE / AUDIO</aside><div class="section-heading"><h2 id="music-title" ${field("songs.title")}>${esc(site.songs.title)}</h2><p ${field("songs.subheadline")}>${esc(site.songs.subheadline)}</p></div><div class="song-grid">${map(site.songs.items, (song, i) => `<article class="song-card" data-song-card><div class="cover-placeholder" aria-hidden="true"><span>${String(i + 1).padStart(2, "0")}</span></div><div class="song-content"><span class="tag" ${field(`songs.items.${i}.tag`)}>${esc(song.tag)}</span><h3 ${field(`songs.items.${i}.title`)}>${esc(song.title)}</h3><p ${field(`songs.items.${i}.description`)}>${esc(song.description)}</p><div class="song-actions"><button type="button" data-preview aria-pressed="false">Play Preview</button><a href="${attr(site.links.spotify)}">Stream</a><a href="#lyrics">Lyrics</a></div></div></article>`)}</div></section>
    <section class="connection section-paper" aria-labelledby="connection-title"><h2 id="connection-title" ${field("connection.title")}>${esc(site.connection.title)}</h2><div class="line-wall">${map(site.connection.lines, (line, i) => `<p ${field(`connection.lines.${i}`)}>${esc(line)}</p>`)}</div><a class="btn primary" href="#join" ${field("connection.cta")}>${esc(site.connection.cta)}</a></section>
    <section class="signup section-dark" id="join" aria-labelledby="signup-title"><aside class="section-label">DIRECT LINE</aside><div class="signup-copy"><h2 id="signup-title" ${field("signup.title")}>${esc(site.signup.title)}</h2><p ${field("signup.subtext")}>${esc(site.signup.subtext)}</p><p class="ownership" ${field("signup.ownership")}>${esc(site.signup.ownership)}</p></div><form class="capture-form" name="fan-list" method="POST" data-netlify="true"><input type="hidden" name="form-name" value="fan-list" /><label>Email <input name="email" type="email" autocomplete="email" required placeholder="you@example.com" /></label><label>Phone optional <input name="phone" type="tel" autocomplete="tel" placeholder="optional" /></label><button class="btn primary" type="submit" ${field("signup.button")}>${esc(site.signup.button)}</button><small><span ${field("signup.trust")}>${esc(site.signup.trust)}</span> <span ${field("signup.support")}>${esc(site.signup.support)}</span></small></form></section>
    <section class="about section-paper" aria-labelledby="about-title"><div class="about-image"><img src="/assets/taped-note.svg" alt="A taped lyric note on a blank wall" loading="lazy" /></div><div><h2 id="about-title" ${field("about.title")}>${esc(site.about.title)}</h2>${map(site.about.copy, (p, i) => `<p ${field(`about.copy.${i}`)}>${esc(p)}</p>`)}<details class="full-story"><summary ${field("about.cta")}>${esc(site.about.cta)}</summary>${map(site.about.fullStory, (p, i) => `<p ${field(`about.fullStory.${i}`)}>${esc(p)}</p>`)}</details></div></section>
    <section class="videos section-dark" id="videos" aria-labelledby="videos-title"><div class="section-heading"><h2 id="videos-title" ${field("videos.title")}>${esc(site.videos.title)}</h2><p ${field("videos.subheadline")}>${esc(site.videos.subheadline)}</p></div><div class="video-grid">${map(site.videos.items, (item, i) => `<article class="video-card"><div class="video-thumb" aria-label="${attr(item)} video placeholder"><span></span></div><h3 ${field(`videos.items.${i}`)}>${esc(item)}</h3><p>Caption and transcript placeholder ready for upload.</p></article>`)}</div></section>
    <section class="quotes section-paper" id="wall-quotes" aria-labelledby="quotes-title"><div class="section-heading"><h2 id="quotes-title" ${field("quotes.title")}>${esc(site.quotes.title)}</h2><p ${field("quotes.subheadline")}>${esc(site.quotes.subheadline)}</p></div><div class="filter-row" aria-label="Quote filters">${map(site.quotes.filters, (filter, i) => `<button type="button" data-filter="${attr(filter)}" ${field(`quotes.filters.${i}`)}>${esc(filter)}</button>`)}</div><div class="quote-grid">${map(site.quotes.items, (quote, i) => `<article class="quote-card" data-quote-card><span class="tape-label">${esc(site.quotes.filters[i % site.quotes.filters.length])}</span><p ${field(`quotes.items.${i}`)}>${esc(quote)}</p><div class="quiet-actions"><button type="button" data-copy="${attr(quote)}">Copy</button><button type="button" data-share="${attr(quote)}">Share</button><button type="button">Use as caption</button></div></article>`)}</div></section>
    <section class="merch section-dark merch-collection" id="merch" aria-labelledby="merch-title"><div class="merch-heading"><h2 id="merch-title" ${field("merch.title")}>${esc(site.merch.title)}</h2><p ${field("merch.subheadline")}>${esc(site.merch.subheadline)}</p></div><div class="merch-grid">${map(site.merch.items, (item, i) => `<article class="merch-card"><span class="artifact" ${field(`merch.items.${i}.artifact`)}>${esc(item.artifact || "NEW")}</span><a class="product-shot" href="#join" aria-label="Join waitlist for ${attr(item.name)}"><img src="${attr(item.image || "/assets/product-flatlay.svg")}" alt="${attr(item.name)} merch mockup" loading="lazy" ${field(`merch.items.${i}.image`)} /></a><div class="product-name-bar"><h3 ${field(`merch.items.${i}.name`)}>${esc(item.name)}</h3></div><a class="shop-link" href="#join">SHOP NOW <span aria-hidden="true">→</span></a><div class="product-details"><p ${field(`merch.items.${i}.description`)}>${esc(item.description)}</p><dl><div><dt>Front</dt><dd ${field(`merch.items.${i}.front`)}>${esc(item.front)}</dd></div><div><dt>Back</dt><dd ${field(`merch.items.${i}.back`)}>${esc(item.back)}</dd></div></dl></div></article>`)}</div><div class="merch-trust">${map(site.merch.trust || ["WORLDWIDE SHIPPING", "SECURE CHECKOUT", "EASY RETURNS"], (item, i) => `<span ${field(`merch.trust.${i}`)}>${esc(item)}</span>`)}</div></section>
    <section class="wall section-paper" id="wall" aria-labelledby="wall-title"><div class="section-heading"><p class="wall-name" ${field("wall.title")}>${esc(site.wall.title)}</p><h2 id="wall-title" ${field("wall.headline")}>${esc(site.wall.headline)}</h2><p ${field("wall.subheadline")}>${esc(site.wall.subheadline)}</p></div><div class="wall-layout"><form class="wall-form" data-wall-form><label>Display name or anonymous <input name="name" placeholder="Post anonymously" /></label><label>Mood <select name="mood">${map(site.wall.moods, (mood) => `<option>${esc(mood)}</option>`)}</select></label><label>What are you carrying? <textarea name="message" required></textarea></label><label>Song that helped you <input name="song" placeholder="Barely Holding On" /></label><label>Optional quote/lyric that fits <input name="quote" /></label><p class="privacy" ${field("wall.privacy")}>${esc(site.wall.privacy)}</p><p class="crisis-message" data-crisis hidden ${field("wall.crisis")}>${esc(site.wall.crisis)}</p><button class="btn primary" type="submit">PUT IT ON THE WALL</button><small>Demo posts wait in a local moderation queue. Connect Firebase, Supabase, or another backend here later.</small></form><div><details class="rules"><summary>Wall Rules</summary><ul>${map(site.wall.rules, (rule, i) => `<li ${field(`wall.rules.${i}`)}>${esc(rule)}</li>`)}</ul></details><div class="post-grid" data-post-grid>${map(site.wall.posts, (post, i) => `<article class="post-card"><div><strong ${field(`wall.posts.${i}.name`)}>${esc(post.name)}</strong><span ${field(`wall.posts.${i}.mood`)}>${esc(post.mood)}</span></div><p ${field(`wall.posts.${i}.message`)}>${esc(post.message)}</p><small>Song that helped: <b ${field(`wall.posts.${i}.song`)}>${esc(post.song)}</b></small><div class="quiet-actions"><button type="button">Heart</button><button type="button">I felt this</button><button type="button">Report</button></div></article>`)}</div></div></div></section>
    <section class="rotator section-dark" id="lyrics" aria-labelledby="rotator-title"><h2 id="rotator-title" ${field("rotator.title")}>${esc(site.rotator.title)}</h2><p class="rotating-line" data-rotator data-lines="${attr(JSON.stringify(site.rotator.lines))}" ${field("rotator.lines.0")}>${esc(site.rotator.lines[0])}</p><button class="btn ghost" type="button" data-copy-rotator>Copy line</button></section>
    <section class="clips section-paper" aria-labelledby="clips-title"><h2 id="clips-title" ${field("clips.title")}>${esc(site.clips.title)}</h2><div class="clip-grid">${map(site.clips.items, (item, i) => `<article class="clip-card"><div class="clip-frame"></div><h3 ${field(`clips.items.${i}`)}>${esc(item)}</h3><button type="button">Copy caption</button><button type="button">Use this sound</button><button type="button">Make your own motion</button></article>`)}</div></section>
    <section class="momentum section-dark" aria-labelledby="momentum-title"><h2 id="momentum-title" ${field("momentum.title")}>${esc(site.momentum.title)}</h2><div class="momentum-grid">${map(site.momentum.stats, (stat, i) => `<p ${field(`momentum.stats.${i}`)}>${esc(stat)}</p>`)}</div><div class="embed-strip">${map(site.momentum.placeholders, (item, i) => `<span ${field(`momentum.placeholders.${i}`)}>${esc(item)}</span>`)}</div></section>
    <section class="support section-paper" aria-labelledby="support-title"><h2 id="support-title" ${field("support.title")}>${esc(site.support.title)}</h2><p ${field("support.subheadline")}>${esc(site.support.subheadline)}</p><div class="cta-row">${map(site.support.buttons, (button, i) => `<a class="${i === 0 ? "btn primary" : "btn ghost dark"}" href="${i === 0 ? "#merch" : "#join"}" ${field(`support.buttons.${i}`)}>${esc(button)}</a>`)}</div></section>
    <section class="contact section-dark" id="contact" aria-labelledby="contact-title"><h2 id="contact-title" ${field("contact.title")}>${esc(site.contact.title)}</h2><form class="contact-form" name="contact" method="POST" data-netlify="true"><input type="hidden" name="form-name" value="contact" /><label>Name <input name="name" required /></label><label>Email <input name="email" type="email" required /></label><label>Reason for contact <select name="reason">${map(site.contact.reasons, (reason) => `<option>${esc(reason)}</option>`)}</select></label><label>Message <textarea name="message" required></textarea></label><button class="btn primary" type="submit" ${field("contact.button")}>${esc(site.contact.button)}</button></form></section>
    <section class="faq section-paper" aria-labelledby="faq-title"><h2 id="faq-title" ${field("faq.title")}>${esc(site.faq.title)}</h2><div class="faq-list">${map(site.faq.items, (item, i) => `<details><summary ${field(`faq.items.${i}.q`)}>${esc(item.q)}</summary><p ${field(`faq.items.${i}.a`)}>${esc(item.a)}</p></details>`)}</div></section>
  </main>
  <footer class="footer" data-sb-object-id="${objectId}"><div><span class="m3m-symbol" aria-hidden="true"><i></i><i></i><i></i></span><h2 ${field("artist.name")}>${esc(site.artist.name)}</h2><p ${field("artist.tagline")}>${esc(site.artist.tagline)}</p><small ${field("artist.footerLine")}>${esc(site.artist.footerLine)}</small></div><nav aria-label="Footer links"><a href="${attr(site.links.spotify)}">Spotify</a><a href="${attr(site.links.appleMusic)}">Apple Music</a><a href="${attr(site.links.soundcloud)}">SoundCloud</a><a href="${attr(site.links.youtube)}">YouTube</a><a href="${attr(site.links.instagram)}">Instagram</a><a href="${attr(site.links.tiktok)}">TikTok</a><a href="#join">Email signup</a><a href="#merch">Merch</a><a href="#wall">The Wall</a><a href="#contact">Contact</a></nav><p>© ${new Date().getFullYear()} MIXED3MOTIONZ. All rights reserved.</p></footer>
  <nav class="mobile-bottom" aria-label="Mobile quick navigation"><a href="#music">Listen</a><a href="#wall">Wall</a><a href="#merch">Drop</a><a href="#join">Join</a></nav>
  <script src="/site.js" defer></script>
</body>
</html>`;

writeFileSync(join(dist, "index.html"), html);
writeFileSync(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${esc(site.canonicalUrl)}</loc></url></urlset>`);
