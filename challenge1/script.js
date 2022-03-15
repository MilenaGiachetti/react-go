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
const backdrop = document.getElementById("backdrop");
const toggleNav = () => {
    if(navToggle.classList.contains("nav_toggle-close")) {
        navToggle.setAttribute("aria-label", "Open nav");
    } else {
        navToggle.setAttribute("aria-label", "Close nav");
    }
    navToggle.classList.toggle("nav_toggle-close");
    backdrop.classList.toggle("backdrop_visible");
}
navToggle.addEventListener("click", toggleNav)
backdrop.addEventListener("click", toggleNav)

// MODAL
const renders = document.getElementsByClassName("render-card");
const modalContent = document.getElementById("modal_content");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("close-button");

for (let i = 0; i < renders.length; i++) {
    renders[i].addEventListener("click", (e) => {
        const url = e.target.dataset.url;
        console.log(url);
        modalContent.style = `background-image: url('${url}')`;
        modal.classList.add("modal-open");
    })
}
// modal close handler
modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
})

modal.addEventListener("click", () => {
    modal.classList.remove("modal-open");
})

modalClose.addEventListener("click", () => {
    modal.classList.remove("modal-open");
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

// Projects effects
const project = document.getElementsByClassName("project");

const makeImageFollow = (e) => {
    e.target.closest(".project").querySelector(".follow-image").style.left = `${e.clientX - 100}px`;
    e.target.closest(".project").querySelector(".follow-image").style.top = `${e.clientY - 100}px`;
}

const createListeners = () => {
    for (let i = 0; i < project.length; i++) {
        project[i].addEventListener("mousemove", makeImageFollow)
    }
}

const removeListeners = () => {
    for (let i = 0; i < project.length; i++) {
        project[i].removeEventListener("mousemove", makeImageFollow)
    }
}

let listener;

const checkSizes = (firstCheck = false) => {
    // it would enter if mobile
    if (window.innerWidth < 620) {
        // remove listener if created
        if (listener) {
            removeListeners();
        }
        listener = false;
    // it would enter if desktop 
    // & if firstCheck 
    // or not previous listener created or removed
    } else if (firstCheck || !listener) {
        createListeners();
        listener = true;
    }
}

window.addEventListener("resize", checkSizes);
checkSizes(true);