const toggleButtons = document.getElementsByClassName("toggle-title");

for (let i = 0; i < toggleButtons.length; i++) {
    console.log("hi")

    toggleButtons[i].addEventListener("click", () => {
        console.log("hi")
        toggleButtons[i].parentNode.classList.toggle("closed");
    })
}