const PI = 3.14159265359;

// -------- ELEMENTS --------
// inputs
const shapeInput = document.getElementById("shape");
const radio = document.getElementById("radio");
const base = document.getElementById("base");
const height = document.getElementById("height");
const inputs = document.getElementsByTagName("input");
// container
const radioInputCtn = document.getElementById("radio-ctn");
const rectangleInputsCtn = document.getElementById("rectangle-ctn");
const submitCtn = document.getElementById("submit-ctn");
// counter
const counter = document.getElementById("counter");

const cleanInputs = () => {
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error");
        inputs[i].value = "";
    }
}
 
shapeInput.addEventListener("change", (e) => {
    cleanInputs();
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

// submit button
const submitBtn = document.getElementById("submit-ctn");
// results span
const results = document.getElementById("results");

const checkIfPositive = (el) => {
    if (+el.value <= 0) {
        el.classList.add("error")
        return false;
    } 
    return true;
}

const upCounter = () => {
    let num = counter.innerText;
    counter.innerText = +num + 1;
}

const calculate = () => {
    let radioResult = '';
    switch (shapeInput.value) {
        case "circle":
            // ways to square a number
            // +radio.value * +radio.value
            // Math.pow(+radio.value, 2)
            // +radio.value ** 2
            if (checkIfPositive(radio)) {
                radioResult = (+radio.value) ** 2 * PI;
            }
            break;
        case "triangle":
            if (checkIfPositive(base) || checkIfPositive(height)) {
                radioResult = (base.value * height.value) / 2;
            }
            break;
        case "rectangle":   
            if (checkIfPositive(base) || checkIfPositive(height)) {
                radioResult = base.value * height.value;
            } 
            break;
        default:
            break;
    }
    if (radioResult > 0) {
        results.innerText = radioResult.toFixed(2);
        upCounter();
        return;
    }
    results.innerText = "...";
}

submitBtn.addEventListener("click", calculate)

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", (e) => {
        e.target.classList.remove("error");
    })
    inputs[i].addEventListener("keydown", (e) => {
        console.log(e);
        if(e.key === 'Enter') {
            calculate();
        }
        e.target.classList.remove("error");
    })
}