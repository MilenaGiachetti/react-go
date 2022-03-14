// LANGUAGE
const changeDisplay = (lang, display) => {
    const texts = document.querySelectorAll(`[lang='${lang}']:not(html)`);
    texts.forEach((text) => {
        text.style.display = display;
    })
}
const toggleTexts = (lang) => {
    if (lang === 'en') {
        changeDisplay('en', '');
        changeDisplay('es', 'none');
    } else {
        changeDisplay('es', '');
        changeDisplay('en', 'none');
    }
    document.documentElement.setAttribute("lang", lang);
}

document.getElementById("es-btn").addEventListener("click", () => {
    toggleTexts("es");
})
document.getElementById("en-btn").addEventListener("click", () => {
    toggleTexts("en");
})
toggleTexts("es");

// NAV
const navToggle = document.getElementById("nav_toggle");
navToggle.addEventListener("click", () => {
    if(navToggle.classList.contains("nav_toggle-close")) {
        navToggle.setAttribute("aria-label", "Open nav");
    } else {
        navToggle.setAttribute("aria-label", "Close nav");
    }
    navToggle.classList.toggle("nav_toggle-close");
})

// ANIMATIONS with GSAP
gsap.registerPlugin(ScrollTrigger);
// Greetings section appear animation
const greetingsTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#greetings"
    }
});

// Content
greetingsTL.from(".greeting-container", {
    opacity: 0,
    x: -300, 
}).to(".greeting-container", {
    duration: 0.3, 
    opacity: 1,
    x: 0, 
    ease: "none", 
});

// Image
greetingsTL.from(".image-container", {
    opacity: 0,
    x: 300, 
}, 0).to(".image-container", {
    duration: 0.2, 
    opacity: 1,
    x: 0, 
    ease: "none", 
});

// Links
greetingsTL.from(".links-container a", {
    opacity: 0,
    scale: 0
}, .2).to(".links-container a", {
    duration: 0.2, 
    opacity: 1,
    scale: 1
});

// Section headings load animation
gsap.utils.toArray("h3").forEach(el => {
    gsap.timeline({
        scrollTrigger: {
            trigger: el,
            onEnter: () => el.classList.add("load")
        }
    });
});