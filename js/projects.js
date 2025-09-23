document.querySelectorAll(".flip-card").forEach((card) => {
  card.addEventListener("click", () => card.classList.toggle("flipped"));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.classList.toggle("flipped");
    }
  });
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️ Light Mode";
  } else {
    toggle.textContent = "🌙 Dark Mode";
  }
});
