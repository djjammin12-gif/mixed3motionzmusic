// EDIT HERE: Replace placeholder links, image paths, song data, merch data, quote categories,
// backend endpoints, colors in styles.css, and form integrations as the movement grows.

const SITE_URL = "https://mixed3motionmusic.com/";

const songs = [
  {
    title: "No Address",
    description: "A survival record for the nights when home feels more like a memory than a place.",
    mood: "Lost / cinematic / survival",
    image: "assets/song-no-address.png",
    stream: "https://open.spotify.com/artist/replace-me",
    lyrics: "https://genius.com/replace-me",
    releaseDate: "Release date placeholder",
    story: "A record about losing the idea of home and still refusing to stop moving.",
    lyricsExcerpt: "Lyrics placeholder: the room got cold, but the motion stayed.",
    video: "https://youtube.com/@replace-me",
    relatedMerch: "Nobody Clapped Hoodie"
  },
  {
    title: "Dad I'm Not Okay",
    description: "A confession that says what most sons never learn how to say out loud.",
    mood: "Family / confession / pain",
    image: "assets/song-dad-im-not-okay.png",
    stream: "https://music.apple.com/artist/replace-me",
    lyrics: "https://genius.com/replace-me",
    releaseDate: "Release date placeholder",
    story: "A direct confession for family pain, anger, need, and everything sons are taught to hide.",
    lyricsExcerpt: "Lyrics placeholder: I learned silence before I learned how to ask for help.",
    video: "https://youtube.com/@replace-me",
    relatedMerch: "Halfway Understood Tee"
  },
  {
    title: "Static In My Veins",
    description: "Anxiety, impulse, addiction, and ambition colliding in real time.",
    mood: "Chaos / pressure / overthinking",
    image: "assets/song-static-in-my-veins.png",
    stream: "https://soundcloud.com/replace-me",
    lyrics: "https://genius.com/replace-me",
    releaseDate: "Release date placeholder",
    story: "A pressure record for the mind that keeps moving faster than the room can hold.",
    lyricsExcerpt: "Lyrics placeholder: my thoughts got teeth, but my dreams still bite back.",
    video: "https://youtube.com/@replace-me",
    relatedMerch: "Motion Over Madness Tee"
  },
  {
    title: "Barely Holding On",
    description: "For the person smiling in public while breaking in private.",
    mood: "Hidden pain / survival / late night",
    image: "assets/song-barely-holding-on.png",
    stream: "https://youtube.com/@replace-me",
    lyrics: "https://genius.com/replace-me",
    releaseDate: "Release date placeholder",
    story: "For the person who looks calm because explaining the breaking got too expensive.",
    lyricsExcerpt: "Lyrics placeholder: I smiled so nobody could count the cracks.",
    video: "https://youtube.com/@replace-me",
    relatedMerch: "Private War Hoodie"
  },
  {
    title: "When The Walls Cave In",
    description: "A cinematic fall-apart anthem about losing everything and still reaching for something.",
    mood: "Loss / regret / comeback",
    image: "assets/song-when-the-walls-cave-in.png",
    stream: "https://open.spotify.com/artist/replace-me",
    lyrics: "https://genius.com/replace-me",
    releaseDate: "Release date placeholder",
    story: "A comeback record that does not pretend the rebuild looked clean.",
    lyricsExcerpt: "Lyrics placeholder: the walls came down, but I found proof in the dust.",
    video: "https://youtube.com/@replace-me",
    relatedMerch: "Comeback Wasn't Clean Tee"
  }
];

const statements = [
  "For the ones who apologize after the damage is already done.",
  "For the ones who had to raise themselves emotionally.",
  "For the ones who love hard but sabotage harder.",
  "For the ones tired of being called lazy when their mind never shuts off.",
  "For the ones trying to become somebody their past can't recognize.",
  "For the ones who survived things they still do not know how to explain.",
  "For the ones who look calm because falling apart got too expensive.",
  "For the ones still moving with no witness."
];

const videos = [
  ["Official Videos", "Full scenes for the records that need a world, not a clip."],
  ["Lyric Videos", "Words on screen for the lines people replay alone."],
  ["Visualizers", "Smoke, pulse, static, and late-night motion around the sound."],
  ["Behind The Song", "The story under the hook, the wound under the rhythm."],
  ["Studio Moments", "Drafts, takes, silence, pressure, and the moment the room catches."],
  ["Fan Edits", "The movement reflected back through the people who felt it first."]
];

const clips = [
  {
    title: "15-second hook clip",
    caption: "For the ones fighting battles nobody claps for.",
    song: "Barely Holding On",
    transcript: "Transcript placeholder for the hook clip."
  },
  {
    title: "Lyric reel",
    caption: "This line hit me from MIXED3MOTIONZ.",
    song: "No Address",
    transcript: "Transcript placeholder for lyric reel captions."
  },
  {
    title: "Behind-the-song clip",
    caption: "The story under the hook, the wound under the rhythm.",
    song: "Dad I'm Not Okay",
    transcript: "Transcript placeholder for behind-the-song context."
  },
  {
    title: "Fan reaction clip",
    caption: "I found this on The Wall.",
    song: "When The Walls Cave In",
    transcript: "Transcript placeholder for fan reaction accessibility."
  },
  {
    title: "Studio moment clip",
    caption: "Pain in motion. Purpose in progress.",
    song: "Static In My Veins",
    transcript: "Transcript placeholder for studio moment audio."
  },
  {
    title: "Wall story clip",
    caption: "Make your own motion. Say what you have been carrying.",
    song: "Still Moving",
    transcript: "Transcript placeholder for community story clips."
  }
];

const i18nContent = {
  en: {
    "hero.eyebrow": "Pain in motion. Purpose in progress.",
    "hero.headline": "For the ones fighting battles nobody claps for."
  },
  es: {
    "hero.eyebrow": "Spanish translation placeholder.",
    "hero.headline": "Spanish translation placeholder."
  }
};

const quoteCategories = ["Survival", "Love", "Regret", "Healing", "Loyalty", "Overthinking", "Comeback", "Self-war"];

const quotes = [
  ["I do not heal loud. I move different.", "Healing"],
  ["Some people survive the storm. I learned how to write inside it.", "Survival"],
  ["I was not built broken. I was built unfinished.", "Comeback"],
  ["Pain did not make me special. Moving through it did.", "Survival"],
  ["I am not hard to love. I am hard to understand halfway.", "Love"],
  ["The old me still knocks. I just stopped opening the door.", "Healing"],
  ["I carry what almost buried me.", "Survival"],
  ["I stopped asking why it happened and started asking what it made.", "Regret"],
  ["I am proof that damage can still have direction.", "Comeback"],
  ["Some nights I do not win. I just refuse to disappear.", "Self-war"],
  ["I made peace with the parts of me nobody clapped for.", "Healing"],
  ["I do not need perfect. I need real that does not run.", "Loyalty"],
  ["My silence was not weakness. It was survival with no witness.", "Survival"],
  ["I turned pressure into pulse.", "Comeback"],
  ["Not every comeback looks clean.", "Comeback"],
  ["I am still becoming someone my pain cannot control.", "Healing"],
  ["The wound had rhythm before I had words.", "Self-war"],
  ["I stopped calling myself lost when I realized I was still moving.", "Comeback"],
  ["I do not wear scars for sympathy. I wear them like coordinates.", "Survival"],
  ["Some people find God in peace. I found purpose in the wreckage.", "Healing"],
  ["I am not the worst thing I did while hurting.", "Regret"],
  ["I broke cycles with shaking hands.", "Healing"],
  ["The dark did not leave. I learned where to put the light.", "Healing"],
  ["I loved wrong before I learned how to stay.", "Love"],
  ["I was a warning before I became a witness.", "Regret"],
  ["I do not chase closure. I build proof.", "Comeback"],
  ["The mirror stopped lying when I stopped running.", "Regret"],
  ["I am not numb. I am overloaded.", "Overthinking"],
  ["I survived myself. That should count for something.", "Self-war"],
  ["Pain in motion. Purpose in progress.", "Comeback"],
  ["I made a home out of everything that tried to leave me empty.", "Survival"],
  ["I am not behind. I am becoming under pressure.", "Overthinking"],
  ["The pain got loud, so I gave it rhythm.", "Self-war"],
  ["I kept moving because quitting felt too familiar.", "Survival"],
  ["I do not need pity. I need proof that I changed.", "Regret"],
  ["I was never emotionless. I was overcrowded.", "Overthinking"],
  ["I learned to breathe in rooms that tried to bury me.", "Survival"],
  ["Some scars are just maps back to yourself.", "Healing"],
  ["I stopped begging to be understood by people committed to misunderstanding me.", "Love"],
  ["Still here. Still scarred. Still moving.", "Comeback"]
];

const merchCategories = ["Hoodies", "Tees", "Beanies", "Lyric Prints", "Limited Drops", "Fan Favorites"];

const merch = [
  {
    name: "Nobody Clapped Hoodie",
    category: "Hoodies",
    image: "assets/merch-hoodie.png",
    front: "FIGHTING BATTLES NOBODY CLAPS FOR",
    back: "MIXED3MOTIONZ - STILL MOVING",
    description: "For the private wars. For the quiet wins. For the people who kept going with no audience.",
    price: "$--"
  },
  {
    name: "Pain Into Proof Tee",
    category: "Tees",
    image: "assets/merch-tee.png",
    front: "PAIN INTO PROOF",
    back: "I DID NOT BREAK. I BECAME EVIDENCE.",
    description: "A statement piece for turning your worst chapters into proof you survived them.",
    price: "$--"
  },
  {
    name: "Built Unfinished Long Sleeve",
    category: "Limited Drops",
    image: "assets/merch-long-sleeve.png",
    front: "BUILT UNFINISHED",
    sleeve: "STILL BECOMING",
    back: "THE STORY IS NOT DONE WITH ME.",
    description: "For the ones still under construction but no longer ashamed of the process.",
    price: "$--"
  },
  {
    name: "Motion Coordinates Hoodie",
    category: "Hoodies",
    image: "assets/merch-hoodie.png",
    front: "I WEAR MY SCARS LIKE COORDINATES",
    back: "THEY SHOW WHERE I SURVIVED",
    description: "A darker cinematic piece built around survival, memory, and direction.",
    price: "$--"
  },
  {
    name: "Overloaded Tee",
    category: "Tees",
    image: "assets/merch-tee.png",
    front: "I AM NOT NUMB. I AM OVERLOADED.",
    back: "MIXED3MOTIONZ",
    description: "For the overthinkers, the ADHD minds, and the people who feel too much but still function somehow.",
    price: "$--"
  },
  {
    name: "Still Moving Beanie",
    category: "Beanies",
    image: "assets/merch-beanie.png",
    front: "STILL MOVING",
    back: "DO NOT DISAPPEAR.",
    description: "Simple, wearable, and instantly tied to the movement.",
    price: "$--"
  },
  {
    name: "No Witness Hoodie",
    category: "Fan Favorites",
    image: "assets/merch-hoodie.png",
    front: "SURVIVAL WITH NO WITNESS",
    back: "I MADE IT THROUGH WHAT NEVER MADE THE NEWS.",
    description: "For the people who had to survive in silence.",
    price: "$--"
  },
  {
    name: "Cycle Breaker Tee",
    category: "Tees",
    image: "assets/merch-tee.png",
    front: "I BROKE CYCLES WITH SHAKING HANDS",
    back: "MIXED3MOTIONZ - MOTION OVER MADNESS",
    description: "For the ones trying to become better than what raised them, hurt them, or shaped them.",
    price: "$--"
  },
  {
    name: "Comeback Wasn't Clean Tee",
    category: "Fan Favorites",
    image: "assets/merch-tee.png",
    front: "NOT EVERY COMEBACK LOOKS CLEAN",
    back: "BUT I CAME BACK ANYWAY.",
    description: "For the messy rebuild. For the ones who are still here.",
    price: "$--"
  },
  {
    name: "The Wreckage Collection Signed Lyric Print",
    category: "Lyric Prints",
    image: "assets/merch-print.png",
    front: "I TURNED THE WRECKAGE INTO RHYTHM.",
    back: "SIGNED LYRIC-STYLE ART PRINT",
    description: "Limited signed lyric-style art print for fans who connect with the deeper side of the music.",
    price: "$--"
  },
  {
    name: "Halfway Understood Tee",
    category: "Tees",
    image: "assets/merch-tee.png",
    front: "HARD TO UNDERSTAND HALFWAY",
    back: "LOVE ME REAL OR LET ME BREATHE.",
    description: "For the ones tired of being reduced to the easiest version of their story.",
    price: "$--"
  },
  {
    name: "Still Becoming Hoodie",
    category: "Limited Drops",
    image: "assets/merch-hoodie.png",
    front: "STILL BECOMING",
    back: "I AM NOT WHO I WAS. I AM NOT WHO I'M DONE BECOMING.",
    description: "For the rebuild season. For the people changing in real time.",
    price: "$--"
  },
  {
    name: "Motion Over Madness Tee",
    category: "Tees",
    image: "assets/merch-tee.png",
    front: "MOTION OVER MADNESS",
    back: "WHEN MY MIND GOT LOUD, I MOVED.",
    description: "For turning mental chaos into momentum.",
    price: "$--"
  },
  {
    name: "Private War Hoodie",
    category: "Hoodies",
    image: "assets/merch-hoodie.png",
    front: "PRIVATE WAR",
    back: "PUBLIC SMILE.",
    description: "For the people who look okay because explaining got exhausting.",
    price: "$--"
  },
  {
    name: "Do Not Disappear Wristband",
    category: "Limited Drops",
    image: "assets/merch-bracelet.png",
    front: "DO NOT DISAPPEAR",
    back: "WRISTBAND",
    description: "A small reminder for the days when staying feels like the hardest thing.",
    price: "$--"
  }
];

const wallPosts = [
  {
    name: "Anonymous",
    mood: "Overthinking",
    message: "I keep messing up things I care about, then acting like I do not care because it hurts less than admitting I do.",
    song: "Barely Holding On",
    time: "Pending approval"
  },
  {
    name: "D.",
    mood: "Trying",
    message: "I am not where I want to be, but I am finally tired of lying to myself about why.",
    song: "Static In My Veins",
    time: "Pending approval"
  },
  {
    name: "Anonymous",
    mood: "Healing",
    message: "I thought healing would feel peaceful. Right now it just feels like not going back.",
    song: "When The Walls Cave In",
    time: "Pending approval"
  },
  {
    name: "M.",
    mood: "Lost",
    message: "I do not know where home is anymore. I just know I am still moving.",
    song: "No Address",
    time: "Pending approval"
  },
  {
    name: "Anonymous",
    mood: "Family",
    message: "I wish I knew how to tell my dad I am angry and still need him at the same time.",
    song: "Dad I'm Not Okay",
    time: "Pending approval"
  }
];

const rotatorLines = [
  "I turned the wreckage into rhythm.",
  "Some nights I survive myself just to prove I still can.",
  "I do not need the world to understand me. I need the ones like me to feel less alone.",
  "Pain does not leave. Sometimes it learns the melody.",
  "I am not the damage. I am what moved through it.",
  "I stopped calling it weakness when I realized I was still breathing.",
  "The story did not save me. Telling it did.",
  "I made motion out of everything that tried to make me disappear."
];

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
      ([title, caption]) => `
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
  if (line) line.textContent = rotatorLines[rotatorIndex];
}

function bindRotator() {
  $("[data-prev-line]")?.addEventListener("click", () => {
    rotatorIndex = (rotatorIndex - 1 + rotatorLines.length) % rotatorLines.length;
    updateRotator();
  });
  $("[data-next-line]")?.addEventListener("click", () => {
    rotatorIndex = (rotatorIndex + 1) % rotatorLines.length;
    updateRotator();
  });
  $("[data-share-line]")?.addEventListener("click", () =>
    sharePayload({ title: "MIXED3MOTIONZ", text: rotatorLines[rotatorIndex], url: SITE_URL }, `${rotatorLines[rotatorIndex]}\n${SITE_URL}`)
  );

  window.setInterval(() => {
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
    showToast("Spanish content fields are ready. Full Espanol copy can be added in script.js.");
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

document.addEventListener("DOMContentLoaded", () => {
  $("[data-year]").textContent = new Date().getFullYear();
  renderSongs();
  renderSongDetails();
  renderStatements();
  renderVideos();
  renderClips();
  renderQuotes();
  renderMerch();
  renderWallPosts();
  bindForms();
  bindRotator();
  bindNavigation();
  bindShareSite();
  bindLanguageSwitch();
  bindAccessibility();
  drawVisualizer();
});
