// ===============================
// NAVBAR SAAT SCROLL
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ===============================
// ANIMASI SECTION SAAT MUNCUL
// ===============================

const sections = document.querySelectorAll(
    ".profile, .skills, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ===============================
// EFEK GELEMBUNG
// ===============================

const hero = document.querySelector(".hero");

for (let i = 0; i < 15; i++) {
    const bubble = document.createElement("div");

    bubble.classList.add("water-bubble");

    const size = Math.random() * 20 + 5;
    const left = Math.random() * 100;
    const duration = Math.random() * 6 + 4;
    const delay = Math.random() * 5;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;

    hero.appendChild(bubble);
}


// ===============================
// TAHUN FOOTER OTOMATIS
// ===============================

const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} OceanBlue. Dibuat dengan 💙 dan kecintaan terhadap laut.`;
}


// ===============================
// EFEK KETIKA TOMBOL DIKLIK
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });
});