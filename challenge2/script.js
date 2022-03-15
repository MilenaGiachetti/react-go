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
    results.innerText = "-";
})

// submit button
const submitBtn = document.getElementById("submit-ctn");
// results span
const results = document.getElementById("results");

const checkIfValid = (el) => {
    let num = +el.value;
    let error;
    if (!el.value || isNaN(num)) {
        error = "Ingrese un número válido";
    } else if (num <= 0) {
        error = "Ingrese un número positivo mayor a 0";
    } else if (num > 100) {
        error = "Ingrese un número entre 0 y 100. El rango supera la capacidad de cálculo";
    }
    if (error) {
        el.classList.add("error");
        el.parentNode.querySelector(".error-message").innerText = error;
        return false;
    } 
    return true;
}

const upCounter = () => {
    let num = counter.innerText;
    counter.innerText = +num + 1;
}

const calculate = () => {
    let radioResult = "";
    switch (shapeInput.value) {
        case "circle":
            // ways to square a number
            // +radio.value * +radio.value
            // Math.pow(+radio.value, 2)
            // +radio.value ** 2
            if (checkIfValid(radio)) {
                radioResult = (+radio.value) ** 2 * PI;
            }
            break;
        case "triangle":
            if (checkIfValid(base) && checkIfValid(height)) {
                radioResult = (base.value * height.value) / 2;
            }
            break;
        case "rectangle":
            if (checkIfValid(base) && checkIfValid(height)) {
                radioResult = base.value * height.value;
            } 
            break;
        default:
            break;
    }
    if (radioResult > 0) {
        results.innerText = radioResult.toFixed(2);
        upCounter();
        cleanInputs();
        return;
    }
    results.innerText = "-";
}

submitBtn.addEventListener("click", calculate)

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", (e) => {
        e.target.classList.remove("error");
    })
    inputs[i].addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            calculate();
        } else {
            e.target.classList.remove("error");
        }
    })
}