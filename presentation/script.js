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