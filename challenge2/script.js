const shapeInput = document.getElementById("shape");
const radioInputCtn = document.getElementById("radio-ctn");
const rectangleInputsCtn = document.getElementById("rectangle-ctn");
const submitCtn = document.getElementById("submit-ctn");

shapeInput.addEventListener("change", (e) => {
    switch (e.target.value) {
        case "circle":
            rectangleInputsCtn.style.display = "none";
            radioInputCtn.style.display = "block";
            submitCtn.style.display = "block";
            break;
        case "triangle":
        case "rectangle":   
            radioInputCtn.style.display = "none";
            rectangleInputsCtn.style.display = "block";
            submitCtn.style.display = "block";
            break;
        default:
            rectangleInputsCtn.style.display = "none";
            radioInputCtn.style.display = "none";
            submitCtn.style.display = "none";
            break;
    }
    results.innerText = "...";
})

const submitBtn = document.getElementById("submit-ctn");
const radio = document.getElementById("radio");
const base = document.getElementById("base");
const height = document.getElementById("height");
const results = document.getElementById("results");

submitBtn.addEventListener("click", (e) => {
    let radioResult = '';
    switch (shapeInput.value) {
        case "circle":
            // another way to calculate radio
            // radioResult = +radio.value * +radio.value
            radioResult = Math.pow(+radio.value, 2);
            break;
        case "triangle":
            radioResult = (base.value * height.value) / 2;
            break;
        case "rectangle":   
            radioResult = base.value * height.value;            
            break;
        default:
            break;
    }
    results.innerText = radioResult;
})

const inputs = document.getElementsByTagName("input");

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", (e) => {
        e.target.classList.remove("error");
    })
}