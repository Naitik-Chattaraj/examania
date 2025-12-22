"use client";
import { useEffect } from "react";

export function useComicEffects() {
  useEffect(() => {
    console.log("🎨 KA-POW! Comic effects mounted!");

    /* ---------------- YEAR ---------------- */
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    /* ---------------- SOUND EFFECT HOVER ---------------- */
    const soundEffectDisplay = document.getElementById("sound-effect-display");
    const soundLinks = document.querySelectorAll<HTMLElement>("[data-hover-sound]");
    let soundTimeout: ReturnType<typeof setTimeout> | null = null;

    soundLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const soundText = link.dataset.hoverSound;
        if (!soundEffectDisplay || !soundText) return;

        soundEffectDisplay.textContent = soundText;
        soundEffectDisplay.classList.add("show");

        const xOffset = Math.random() * 40 - 20;
        const yOffset = Math.random() * 20 - 10;
        soundEffectDisplay.style.setProperty("--dynamic-x", `${50 + xOffset}vw`);
        soundEffectDisplay.style.setProperty("--dynamic-y", `${50 + yOffset}vh`);

        if (soundTimeout) clearTimeout(soundTimeout);
      });

      link.addEventListener("mouseleave", () => {
        if (!soundEffectDisplay) return;
        soundTimeout = setTimeout(() => {
          soundEffectDisplay.classList.remove("show");
        }, 300);
      });
    });

    /* ---------------- RANDOM SOUND CLICK ---------------- */
    const randomSoundTextEl = document.getElementById("random-sound-text");
    const randomSounds = ["BAM!", "POW!", "WHOOSH!", "CRASH!", "ZAP!", "BOOM!", "CLICK!", "SWOOSH!"];

    randomSoundTextEl?.addEventListener("click", () => {
      const sound = randomSounds[Math.floor(Math.random() * randomSounds.length)];
      randomSoundTextEl.textContent = sound;

      if (!soundEffectDisplay) return;
      soundEffectDisplay.textContent = sound;
      soundEffectDisplay.classList.add("show");

      if (soundTimeout) clearTimeout(soundTimeout);
      soundTimeout = setTimeout(() => {
        soundEffectDisplay.classList.remove("show");
      }, 800);
    });

    /* ---------------- SKILL BAR OBSERVER ---------------- */
    const skillItems = document.querySelectorAll<HTMLElement>(".skill-item");

    const skillObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const powerFill = entry.target.querySelector<HTMLElement>(".power-fill");
          if (!powerFill) return;

          const skillPower = (entry.target as HTMLElement).style.getPropertyValue("--skill-power");
          powerFill.style.width = skillPower || "0%";

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    skillItems.forEach((item) => skillObserver.observe(item));

    /* ---------------- SMOOTH SCROLL ---------------- */
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (!href || href.length <= 1) return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      });
    });

    /* ---------------- TITLE LETTER POP ---------------- */
    const mainTitle = document.querySelector<HTMLSpanElement>(".main-title span");
    if (mainTitle && mainTitle.textContent) {
      const text = mainTitle.textContent;
      mainTitle.innerHTML = "";

            text.split("").forEach((char, i) => {
              const span = document.createElement("span");
              span.textContent = char;
              span.style.opacity = "0";
              span.style.display = "inline-block";
              span.style.animation = `letterPopIn 0.5s ease-out ${i * 0.05}s forwards`;
              mainTitle.appendChild(span);
            });
          }
        }, []);
      }
