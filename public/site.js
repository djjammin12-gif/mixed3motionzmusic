const root = document.documentElement;
const toggles = document.querySelectorAll("[data-toggle]");

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.toggle;
    const active = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!active));
    if (type === "motion") document.body.classList.toggle("is-paused", !active);
    if (type === "contrast") document.body.classList.toggle("is-contrast", !active);
    if (type === "text") document.body.classList.toggle("is-large-text", !active);
  });
});

document.querySelectorAll("section:not(.hero), article").forEach((el) => el.setAttribute("data-reveal", ""));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.08 });
document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

document.querySelectorAll("[data-preview]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-song-card]");
    card?.classList.toggle("is-playing");
    const playing = Boolean(card?.classList.contains("is-playing"));
    button.setAttribute("aria-pressed", String(playing));
    button.textContent = playing ? "Pause Preview" : "Play Preview";
  });
});

async function copyText(text) {
  await navigator.clipboard?.writeText(text);
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    await copyText(button.dataset.copy || "");
    button.textContent = "Copied";
    setTimeout(() => (button.textContent = "Copy"), 1200);
  });
});

document.querySelectorAll("[data-share]").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.share || "";
    if (navigator.share) {
      await navigator.share({ text, title: "MIXED3MOTIONZ" });
    } else {
      await copyText(text);
      button.textContent = "Copied";
      setTimeout(() => (button.textContent = "Share"), 1200);
    }
  });
});

const rotator = document.querySelector("[data-rotator]");
if (rotator) {
  const lines = JSON.parse(rotator.dataset.lines || "[]");
  let index = 0;
  setInterval(() => {
    if (document.body.classList.contains("is-paused") || lines.length === 0) return;
    index = (index + 1) % lines.length;
    rotator.textContent = lines[index];
  }, 4200);
  document.querySelector("[data-copy-rotator]")?.addEventListener("click", () => copyText(rotator.textContent || ""));
}

const wallForm = document.querySelector("[data-wall-form]");
const postGrid = document.querySelector("[data-post-grid]");
const crisis = document.querySelector("[data-crisis]");
const dangerWords = ["suicide", "kill myself", "hurt myself", "overdose", "immediate danger", "abuse", "violence", "hurt someone"];

wallForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(wallForm);
  const message = String(data.get("message") || "");
  const lower = message.toLowerCase();
  crisis.hidden = !dangerWords.some((word) => lower.includes(word));

  const article = document.createElement("article");
  article.className = "post-card is-visible";
  article.innerHTML = `
    <div><strong>${escapeHtml(String(data.get("name") || "Anonymous"))}</strong><span>${escapeHtml(String(data.get("mood") || "Trying"))}</span></div>
    <p>${escapeHtml(message)}</p>
    <small>Song that helped: <b>${escapeHtml(String(data.get("song") || "Pending"))}</b></small>
    <div class="quiet-actions"><button type="button">Pending approval</button><button type="button">I felt this</button><button type="button">Report</button></div>
  `;
  postGrid?.prepend(article);
  wallForm.reset();
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}
