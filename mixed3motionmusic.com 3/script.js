// Editable site content lives in /content/*.json so Netlify Visual Editor can manage it.
// Keep behavior and animations here; edit public copy, cards, products, FAQ, and socials in the content files.

const SITE_URL = "https://mixed3motionmusic.com/";

let siteContent = {};
let songs = [];
let statements = [];
let videos = [];
let clips = [];
let i18nContent = {};
let quoteCategories = [];
let quotes = [];
let merchCategories = [];
let merch = [];
let wallPosts = [];
let rotatorLines = [];
let faqItems = [];
let socialLinks = [];

const crisisTerms = [
  "suicide",
  "kill myself",
  "end my life",
  "hurt myself",
  "self harm",
  "self-harm",
  "overdose",
  "might die",
  "immediate danger",
  "hurt someone",
  "kill someone",
  "abuse"
];

const abuseTerms = ["hate speech", "harass", "dox", "private address", "phone number is"];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const isLocalPreview = () => ["127.0.0.1", "localhost", ""].includes(window.location.hostname) || window.location.protocol === "file:";

const escapeHTML = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

async function loadJSON(path) {
  const response = await fetch(path, { cache: "no-cache" });
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return response.json();
}

async function loadContent() {
  try {
    const [site, music, quoteData, merchData, wallData, media, rotator, i18n, faq, social] = await Promise.all([
      loadJSON("content/site.json"),
      loadJSON("content/music.json"),
      loadJSON("content/quotes.json"),
      loadJSON("content/merch.json"),
      loadJSON("content/wall.json"),
      loadJSON("content/media.json"),
      loadJSON("content/rotator.json"),
      loadJSON("content/i18n.json"),
      loadJSON("content/faq.json"),
      loadJSON("content/social.json")
    ]);

    siteContent = site;
    songs = music.songs || [];
    quoteCategories = quoteData.categories || [];
    quotes = (quoteData.quotes || []).map((quote) => [quote.text, quote.category]);
    merchCategories = merchData.categories || [];
    merch = merchData.products || [];
    statements = wallData.statements || [];
    wallPosts = wallData.posts || [];
    videos = media.videos || [];
    clips = media.clips || [];
    rotatorLines = rotator.lines || [];
    i18nContent = i18n || {};
    faqItems = faq.items || [];
    socialLinks = social.links || [];
  } catch (error) {
    console.error(error);
    showToast("Content files could not load. Preview this site through a local server or Netlify.");
  }
}

function setText(selector, value) {
  const element = $(selector);
  if (element && value !== undefined) element.textContent = value;
}

function applySiteContent() {
  const brand = siteContent.brand || {};
  const hero = siteContent.hero || {};
  const about = siteContent.about || {};

  setText("[data-brand-name]", brand.artistName);
  setText("[data-brand-domain]", brand.domain);
  setText("[data-footer-tagline]", brand.tagline);
  setText("[data-footer-line]", brand.footerLine);
  setText("[data-footer-domain]", brand.domain);

  setText("[data-hero-eyebrow]", hero.eyebrow);
  setText("[data-hero-title]", hero.title);
  setText("[data-hero-headline]", hero.headline);
  setText("[data-hero-copy]", hero.copy);
  setText("[data-hero-primary]", hero.primaryCta);
  setText("[data-hero-secondary]", hero.secondaryCta);
  setText("[data-hero-tertiary]", hero.tertiaryCta);
  setText("[data-hero-microcopy]", hero.microcopy);
  setText("[data-hero-side-note]", hero.sideNote);

  setText("[data-about-visual-small]", about.visualSmall);
  setText("[data-about-visual-large]", about.visualLarge);
  setText("[data-about-eyebrow]", about.eyebrow);
  setText("[data-about-title]", about.title);
  setText("[data-about-details-title]", about.detailsTitle);

  const aboutCopy = $("[data-about-copy]");
  if (aboutCopy && about.paragraphs) aboutCopy.innerHTML = about.paragraphs.map((text) => `<p>${escapeHTML(text)}</p>`).join("");

  const aboutDetails = $("[data-about-details]");
  if (aboutDetails && about.detailsParagraphs) {
    aboutDetails.innerHTML = about.detailsParagraphs.map((text) => `<p>${escapeHTML(text)}</p>`).join("");
  }
}

function renderFAQ() {
  const list = $("[data-faq-list]");
  if (!list) return;
  list.innerHTML = faqItems
    .map(
      (item) => `
        <details>
          <summary>${escapeHTML(item.question)}</summary>
          <p>${escapeHTML(item.answer)}</p>
        </details>
      `
    )
    .join("");
}

function renderSocialLinks() {
  const nav = $("[data-footer-links]");
  if (!nav) return;
  const internalLinks = [
    ["Home", "#hero"],
    ["Streaming", "#music"],
    ["Lyrics", "#lyrics"],
    ["Videos", "#visuals"],
    ["Clips", "#clips"],
    ["Email Signup", "#signup"],
    ["Merch", "#merch"],
    ["The Wall", "#motion-wall"],
    ["About", "#about"],
    ["FAQ", "#faq"],
    ["Privacy", "/privacy.html"],
    ["Contact", "#contact"]
  ];
  nav.innerHTML = [
    ...internalLinks.map(([label, url]) => `<a href="${url}">${label}</a>`),
    ...socialLinks.map((link) => `<a href="${escapeHTML(link.url)}">${escapeHTML(link.label)}</a>`)
  ].join("");
}

function showToast(message) {
  const toast = $("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

async function copyText(text, success = "Copied.") {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement("textarea");
      input.value = text;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.append(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    showToast(success);
  } catch {
    showToast("Copy failed. The line is still yours.");
  }
}

async function sharePayload(payload, fallbackText) {
  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch {
      return;
    }
  }
  await copyText(fallbackText, "Share text copied.");
}

function renderSongs() {
  const grid = $("[data-song-grid]");
  if (!grid) return;

  grid.innerHTML = songs
    .map((song, index) => {
      const bars = Array.from({ length: 20 }, (_, bar) => `<span style="animation-delay:${(bar % 7) * 55}ms"></span>`).join("");
      return `
        <article class="song-card" data-song-card>
          <div class="song-art">
            <img src="${song.image}" alt="Cinematic cover art placeholder for ${escapeHTML(song.title)}" loading="lazy" />
            <div class="song-wave" aria-hidden="true">${bars}</div>
          </div>
          <div class="song-body">
            <span class="tag">${escapeHTML(song.mood)}</span>
            <h3>${escapeHTML(song.title)}</h3>
            <p>${escapeHTML(song.description)}</p>
            <div class="card-actions">
              <button class="btn btn-secondary" type="button" data-play-preview="${index}">Play Preview</button>
              <a class="btn btn-secondary" href="${song.stream}" target="_blank" rel="noopener">Stream</a>
              <a class="btn btn-secondary" href="${song.lyrics}" target="_blank" rel="noopener">Lyrics</a>
              <button class="btn btn-secondary" type="button" data-share-song="${index}">Share</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  $$("[data-play-preview]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-song-card]");
      const isPreviewing = card.classList.toggle("previewing");
      button.textContent = isPreviewing ? "Stop Preview" : "Play Preview";
      showToast(isPreviewing ? "Preview pulse started. Add audio files in script.js when ready." : "Preview stopped.");
    });
  });
  $$("[data-share-song]").forEach((button) => {
    button.addEventListener("click", () => {
      const song = songs[Number(button.dataset.shareSong)];
      sharePayload(
        { title: `${song.title} - MIXED3MOTIONZ`, text: `This song hit me from MIXED3MOTIONZ: ${song.title}.`, url: `${SITE_URL}#lyrics` },
        `This song hit me from MIXED3MOTIONZ: ${song.title}.\n${SITE_URL}#lyrics`
      );
    });
  });
}

function renderSongDetails() {
  const grid = $("[data-song-detail-grid]");
  if (!grid) return;
  grid.innerHTML = songs
    .map(
      (song, index) => `
        <article class="song-detail-card" id="song-${index + 1}">
          <img src="${song.image}" alt="SEO-ready cover art placeholder for ${escapeHTML(song.title)}" loading="lazy" />
          <div>
            <span class="tag">${escapeHTML(song.releaseDate)}</span>
            <h3>${escapeHTML(song.title)}</h3>
            <p>${escapeHTML(song.story)}</p>
            <details>
              <summary>Lyrics placeholder</summary>
              <p>${escapeHTML(song.lyricsExcerpt)}</p>
            </details>
            <p class="song-helped">Related merch: <strong>${escapeHTML(song.relatedMerch)}</strong></p>
            <div class="wide-actions">
              <a class="btn btn-secondary" href="${song.stream}" target="_blank" rel="noopener">Streaming Links</a>
              <a class="btn btn-secondary" href="${song.video}" target="_blank" rel="noopener">Music Video</a>
              <button class="btn btn-secondary" type="button" data-copy-caption="This song hit me from MIXED3MOTIONZ: ${escapeHTML(song.title)}.">Copy Caption</button>
              <button class="btn btn-primary" type="button" data-share-song="${index}">Share Song</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  $$("[data-copy-caption]", grid).forEach((button) => {
    button.addEventListener("click", () => copyText(button.dataset.copyCaption, "Caption copied."));
  });
  $$("[data-share-song]", grid).forEach((button) => {
    button.addEventListener("click", () => {
      const song = songs[Number(button.dataset.shareSong)];
      sharePayload(
        { title: `${song.title} - MIXED3MOTIONZ`, text: `This song hit me from MIXED3MOTIONZ: ${song.title}.`, url: `${SITE_URL}#lyrics` },
        `This song hit me from MIXED3MOTIONZ: ${song.title}.\n${SITE_URL}#lyrics`
      );
    });
  });
}

function renderStatements() {
  const wall = $("[data-statement-wall]");
  if (!wall) return;
  wall.innerHTML = statements.map((statement) => `<article>${escapeHTML(statement)}</article>`).join("");
}

function renderVideos() {
  const grid = $("[data-video-grid]");
  if (!grid) return;
  grid.innerHTML = videos
    .map(
      ({ title, caption }) => `
        <article class="video-card">
          <div class="video-thumb" role="img" aria-label="${escapeHTML(title)} placeholder">
            <span class="play-mark" aria-hidden="true">Play</span>
          </div>
          <div class="video-body">
            <span class="tag">${escapeHTML(title)}</span>
            <p>${escapeHTML(caption)}</p>
            <details>
              <summary>Captions / transcript placeholder</summary>
              <p>Transcript placeholder for ${escapeHTML(title)}. Replace with real captions before launch.</p>
            </details>
          </div>
        </article>
      `
    )
    .join("");
}

function renderClips() {
  const grid = $("[data-clip-grid]");
  if (!grid) return;
  grid.innerHTML = clips
    .map(
      (clip, index) => `
        <article class="clip-card">
          <div class="clip-thumb" role="img" aria-label="${escapeHTML(clip.title)} video placeholder">
            <span class="play-mark" aria-hidden="true">15s</span>
          </div>
          <div class="clip-body">
            <span class="tag">${escapeHTML(clip.song)}</span>
            <h3>${escapeHTML(clip.title)}</h3>
            <p>${escapeHTML(clip.caption)}</p>
            <details>
              <summary>Caption / transcript placeholder</summary>
              <p>${escapeHTML(clip.transcript)}</p>
            </details>
            <div class="wide-actions">
              <button class="btn btn-secondary" type="button" data-copy-caption="${escapeHTML(clip.caption)}">Copy Caption</button>
              <button class="btn btn-secondary" type="button" data-share-clip="${index}">Share</button>
              <a class="btn btn-secondary" href="#music">Use This Sound</a>
              <a class="btn btn-primary" href="#motion-wall">Make Your Own Motion</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  $$("[data-copy-caption]", grid).forEach((button) => {
    button.addEventListener("click", () => copyText(button.dataset.copyCaption, "Caption copied."));
  });
  $$("[data-share-clip]", grid).forEach((button) => {
    button.addEventListener("click", () => {
      const clip = clips[Number(button.dataset.shareClip)];
      sharePayload(
        { title: `${clip.title} - MIXED3MOTIONZ`, text: clip.caption, url: `${SITE_URL}#clips` },
        `${clip.caption}\n${SITE_URL}#clips`
      );
    });
  });
}

function createFilterButtons(container, filters, active, onSelect) {
  if (!container) return;
  const allFilters = ["All", ...filters];
  container.innerHTML = allFilters
    .map(
      (filter) => `
        <button class="filter-btn" type="button" aria-pressed="${filter === active}" data-filter="${escapeHTML(filter)}">
          ${escapeHTML(filter)}
        </button>
      `
    )
    .join("");
  $$("[data-filter]", container).forEach((button) => {
    button.addEventListener("click", () => onSelect(button.dataset.filter));
  });
}

function renderQuotes(active = "All") {
  createFilterButtons($("[data-quote-filters]"), quoteCategories, active, renderQuotes);
  const grid = $("[data-quote-grid]");
  if (!grid) return;
  const visibleQuotes = active === "All" ? quotes : quotes.filter((quote) => quote[1] === active);
  grid.innerHTML = visibleQuotes
    .map(
      ([text, category], index) => `
        <article class="quote-card">
          <span class="tag">${escapeHTML(category)}</span>
          <p>${escapeHTML(text)}</p>
          <div class="quote-actions">
            <button class="btn btn-secondary" type="button" data-copy-quote="${escapeHTML(text)}">Copy</button>
            <button class="btn btn-secondary" type="button" data-share-quote="${escapeHTML(text)}">Share</button>
            <button class="btn btn-secondary" type="button" data-copy-quote="${escapeHTML(text)}">Use as caption</button>
          </div>
        </article>
      `
    )
    .join("");

  $$("[data-copy-quote]").forEach((button) => {
    button.addEventListener("click", () => copyText(button.dataset.copyQuote, "Line copied."));
  });
  $$("[data-share-quote]").forEach((button) => {
    button.addEventListener("click", () =>
      sharePayload(
        { title: "MIXED3MOTIONZ", text: button.dataset.shareQuote, url: SITE_URL },
        `${button.dataset.shareQuote}\n${SITE_URL}`
      )
    );
  });
}

function renderMerch(active = "All") {
  createFilterButtons($("[data-merch-filters]"), merchCategories, active, renderMerch);
  const grid = $("[data-merch-grid]");
  if (!grid) return;
  const visibleMerch = active === "All" ? merch : merch.filter((item) => item.category === active);
  grid.innerHTML = visibleMerch
    .map(
      (item, index) => {
        const originalIndex = merch.indexOf(item);
        const artifact = `Artifact ${String(originalIndex + 1).padStart(3, "0")}`;
        return `
        <article class="merch-card">
          <div class="merch-art">
            <img src="${item.image}" alt="${escapeHTML(item.name)} product mockup placeholder" loading="lazy" />
          </div>
          <div class="merch-body">
            <div class="artifact-row">
              <span class="tag">${escapeHTML(artifact)}</span>
              <span class="tag">${escapeHTML(item.category)}</span>
            </div>
            <h3>${escapeHTML(item.name)}</h3>
            <div class="product-copy">
              <strong>Front: ${escapeHTML(item.front)}</strong>
              <strong>${item.sleeve ? `Sleeve: ${escapeHTML(item.sleeve)}` : `Back: ${escapeHTML(item.back)}`}</strong>
            </div>
            <p>${escapeHTML(item.description)}</p>
            <div class="price-row">
              <span>${escapeHTML(item.price)}</span>
              <select class="size-select" aria-label="Size selector for ${escapeHTML(item.name)}">
                <option>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
              </select>
            </div>
            <div class="card-actions">
              <a class="btn btn-primary" href="#signup">Get Access</a>
              <a class="btn btn-secondary" href="#signup">Join Waitlist</a>
              <button class="btn btn-secondary" type="button" data-copy-quote="${escapeHTML(item.front)}">Copy Caption</button>
              <button class="btn btn-secondary" type="button" data-share-merch="${escapeHTML(item.name)}|${escapeHTML(item.front)}">Share</button>
            </div>
            <div class="social-placeholder" aria-label="Social sharing placeholders">
              <span>TikTok</span><span>Instagram</span><span>X</span><span>Facebook</span><span>Text</span>
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");

  $$("[data-copy-quote]", grid).forEach((button) => {
    button.addEventListener("click", () => copyText(button.dataset.copyQuote, "Merch text copied."));
  });
  $$("[data-share-merch]", grid).forEach((button) => {
    button.addEventListener("click", () => {
      const [name, front] = button.dataset.shareMerch.split("|");
      sharePayload(
        { title: `${name} - MIXED3MOTIONZ`, text: `${front} - I found this MIXED3MOTIONZ piece.`, url: `${SITE_URL}#merch` },
        `${front} - I found this MIXED3MOTIONZ piece.\n${SITE_URL}#merch`
      );
    });
  });
}

function renderWallPosts(posts = wallPosts) {
  const feed = $("[data-wall-feed]");
  if (!feed) return;
  feed.innerHTML = posts
    .map(
      (post, index) => `
        <article class="feed-card">
          <div class="feed-meta">
            <strong>${escapeHTML(post.name || "Anonymous")}</strong>
            <span class="tag">${escapeHTML(post.mood)}</span>
            <span>${escapeHTML(post.time)}</span>
          </div>
          <p class="message">${escapeHTML(post.message)}</p>
          <p class="song-helped">Song that helped: <strong>${escapeHTML(post.song || "Still moving")}</strong></p>
          ${post.quote ? `<p class="song-helped">Line carried: <strong>${escapeHTML(post.quote)}</strong></p>` : ""}
          <div class="feed-actions">
            <button class="btn btn-secondary" type="button" data-support="${index}">Heart/support</button>
            <button class="btn btn-secondary" type="button" data-felt="${index}">I felt this</button>
            <button class="btn btn-secondary" type="button" data-share-post="${index}">Share</button>
            <button class="btn btn-secondary" type="button" data-report="${index}">Report</button>
          </div>
        </article>
      `
    )
    .join("");

  $$("[data-support]").forEach((button) => button.addEventListener("click", () => showToast("Support added to the demo wall.")));
  $$("[data-felt]").forEach((button) => button.addEventListener("click", () => showToast("Marked: I felt this.")));
  $$("[data-report]").forEach((button) => button.addEventListener("click", () => showToast("Report saved to the moderation queue.")));
  $$("[data-share-post]").forEach((button) => {
    button.addEventListener("click", () => {
      const post = wallPosts[Number(button.dataset.sharePost)];
      sharePayload(
        { title: "The Wall", text: `I found this on The Wall: ${post.mood}.`, url: `${SITE_URL}#motion-wall` },
        `I found this on The Wall: ${post.mood}.\n${SITE_URL}#motion-wall`
      );
    });
  });
}

function containsAny(text, list) {
  const normalized = text.toLowerCase();
  return list.some((term) => normalized.includes(term));
}

function bindForms() {
  const signup = $("[data-signup-form]");
  signup?.addEventListener("submit", (event) => {
    if (isLocalPreview()) {
      event.preventDefault();
      $("[data-signup-status]").textContent = "Local preview: this will submit to Netlify Forms after deployment.";
      showToast("Early access form is launch-wired.");
      signup.reset();
    }
  });

  const contact = $("[data-contact-form]");
  contact?.addEventListener("submit", (event) => {
    if (isLocalPreview()) {
      event.preventDefault();
      $("[data-contact-status]").textContent = "Local preview: this will submit to Netlify Forms after deployment.";
      showToast("Contact form is launch-wired.");
      contact.reset();
    }
  });

  const wallForm = $("[data-wall-form]");
  const crisisMessage = $("[data-crisis-message]");
  const wallStatus = $("[data-wall-status]");
  wallForm?.addEventListener("submit", (event) => {
    const formData = new FormData(wallForm);
    const message = String(formData.get("message") || "").trim();
    const name = formData.get("anonymous") ? "Anonymous" : String(formData.get("name") || "Anonymous").trim() || "Anonymous";
    const mood = String(formData.get("mood") || "").trim();
    const song = String(formData.get("song") || "Still Moving").trim();
    const quote = String(formData.get("quote") || "").trim();
    const combined = [message, quote, song].join(" ");

    if (containsAny(combined, abuseTerms)) {
      event.preventDefault();
      wallStatus.textContent = "This needs moderator review before it can be posted.";
      showToast("Held for moderation.");
      return;
    }

    if (containsAny(combined, crisisTerms) && wallForm.dataset.crisisAcknowledged !== "true") {
      event.preventDefault();
      crisisMessage.hidden = false;
      wallForm.dataset.crisisAcknowledged = "true";
      wallStatus.textContent = "Read this first. Submit again only if you still want these words held for moderation.";
      return;
    }

    if (!isLocalPreview()) return;

    event.preventDefault();
    wallPosts.unshift({
      name,
      mood,
      message,
      song,
      quote,
      time: "Pending approval"
    });
    renderWallPosts();
    wallStatus.textContent = "Local preview: your post would submit to the moderation queue after deployment.";
    showToast("Wall form is launch-wired.");
    crisisMessage.hidden = true;
    delete wallForm.dataset.crisisAcknowledged;
    wallForm.reset();
  });
}

let rotatorIndex = 0;

function updateRotator() {
  const line = $("[data-rotating-line]");
  if (!rotatorLines.length) return;
  if (line) line.textContent = rotatorLines[rotatorIndex];
}

function bindRotator() {
  $("[data-prev-line]")?.addEventListener("click", () => {
    if (!rotatorLines.length) return;
    rotatorIndex = (rotatorIndex - 1 + rotatorLines.length) % rotatorLines.length;
    updateRotator();
  });
  $("[data-next-line]")?.addEventListener("click", () => {
    if (!rotatorLines.length) return;
    rotatorIndex = (rotatorIndex + 1) % rotatorLines.length;
    updateRotator();
  });
  $("[data-share-line]")?.addEventListener("click", () =>
    sharePayload({ title: "MIXED3MOTIONZ", text: rotatorLines[rotatorIndex], url: SITE_URL }, `${rotatorLines[rotatorIndex]}\n${SITE_URL}`)
  );

  window.setInterval(() => {
    if (!rotatorLines.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    rotatorIndex = (rotatorIndex + 1) % rotatorLines.length;
    updateRotator();
  }, 5200);
}

function bindNavigation() {
  const header = $("[data-header]");
  const nav = $("[data-nav]");
  const toggle = $("[data-nav-toggle]");

  const setHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("a", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav?.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });
}

function bindShareSite() {
  $$("[data-share-site]").forEach((button) => {
    button.addEventListener("click", () =>
      sharePayload(
        {
          title: "MIXED3MOTIONZ",
          text: "For the ones fighting battles nobody claps for.",
          url: SITE_URL
        },
        `MIXED3MOTIONZ - For the ones fighting battles nobody claps for.\n${SITE_URL}`
      )
    );
  });
}

function bindLanguageSwitch() {
  $("[data-language-switch]")?.addEventListener("click", () => {
    document.documentElement.lang = "en";
    showToast("Spanish content fields are ready in content/i18n.json.");
  });
}

function bindAccessibility() {
  const settings = {
    motion: "reduce-motion",
    contrast: "high-contrast",
    text: "large-text"
  };

  Object.entries(settings).forEach(([key, className]) => {
    const saved = localStorage.getItem(`m3-${key}`) === "true";
    document.body.classList.toggle(className, saved);
    const button = $(`[data-access-toggle="${key}"]`);
    button?.setAttribute("aria-pressed", String(saved));
    button?.addEventListener("click", () => {
      const next = !document.body.classList.contains(className);
      document.body.classList.toggle(className, next);
      localStorage.setItem(`m3-${key}`, String(next));
      button.setAttribute("aria-pressed", String(next));
      showToast(`${button.textContent} ${next ? "enabled" : "disabled"}.`);
    });
  });
}

function drawVisualizer() {
  const canvas = $("[data-visualizer]");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let frame = 0;

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function paint() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    context.clearRect(0, 0, width, height);
    const bars = Math.max(36, Math.floor(width / 15));
    const gap = 3;
    const barWidth = Math.max(2, width / bars - gap);

    for (let i = 0; i < bars; i += 1) {
      const x = i * (barWidth + gap);
      const phase = frame * 0.018 + i * 0.35;
      const isReduced = reducedMotion || document.body.classList.contains("reduce-motion");
      const pulse = isReduced ? 0.4 : (Math.sin(phase) + Math.sin(phase * 0.47 + i)) * 0.22 + 0.52;
      const barHeight = Math.max(10, pulse * height * (0.2 + (i % 9) / 18));
      const gradient = context.createLinearGradient(0, height - barHeight, 0, height);
      gradient.addColorStop(0, "rgba(232, 226, 207, 0.58)");
      gradient.addColorStop(0.55, "rgba(201, 150, 54, 0.28)");
      gradient.addColorStop(1, "rgba(232, 226, 207, 0.04)");
      context.fillStyle = gradient;
      context.fillRect(x, height - barHeight, barWidth, barHeight);
    }

    if (!document.body.classList.contains("reduce-motion")) frame += 1;
    window.requestAnimationFrame(paint);
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  paint();
}

document.addEventListener("DOMContentLoaded", async () => {
  $("[data-year]").textContent = new Date().getFullYear();
  await loadContent();
  applySiteContent();
  renderSongs();
  renderSongDetails();
  renderStatements();
  renderVideos();
  renderClips();
  renderQuotes();
  renderMerch();
  renderWallPosts();
  renderFAQ();
  renderSocialLinks();
  bindForms();
  bindRotator();
  bindNavigation();
  bindShareSite();
  bindLanguageSwitch();
  bindAccessibility();
  drawVisualizer();
});
