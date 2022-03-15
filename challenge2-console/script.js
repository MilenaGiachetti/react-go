const PI = 3.14159265359;
const resultCtn = document.getElementById("result");
const counter = document.getElementById("counter");
const button = document.getElementById("redo-btn");

const validateNumber = (num) => {
    if (isNaN(num)) {
        alert("Error: Ingrese un número válido")
    } else if (num <= 0) {
        alert("Error: Ingrese un número positivo mayor a 0")
    } else if (num > 100) {
        alert("Error: Ingrese un número entre 0 y 100. El rango supera la capacidad de cálculo")
    }
}

const makeCalculation = () => {
    const getFigureMessage = () => {
        return prompt("¿De cuál figura quiere calcular el área?\r\n1. Círculo\r\n2. Rectángulo\r\n3. Triángulo rectángulo\r\nIngrese el número que corresponda", "");
    }
    
    let figure = "";
    
    do {
        figure = getFigureMessage();
    } while (!["1","2","3"].includes(figure));
    
    let result = "";
    switch(figure) {
        case "1":
            let radio;
            do {
                radio = prompt("Ingrese el radio de su círculo", "");
                validateNumber(+radio);
            } while (isNaN(+radio) || +radio <= 0 || +radio > 100);
            result = `El área del círculo con radio ${radio} es ${((+radio) ** 2 * PI).toFixed(2)}`;
            break;
        case "2":
            let base,
                height;
            do {
                base = prompt("Ingrese la base de su cuadrado", "");
                validateNumber(+base);
            } while (isNaN(+base) || +base <= 0 || +base > 100);
            do {
                height = prompt("Ingrese la altura de su cuadrado", "");
                validateNumber(+height);
            } while (isNaN(+height) || +height <= 0 || +height > 100);
            result = `El área del cuadrado con base ${base} y altura ${height} es ${((+base * +height)).toFixed(2)}`;
            break;
        case "3":   
            let baseTriangle,
                heightTriangle;
            do {
                baseTriangle = prompt("Ingrese la base de su triángulo", "");
                validateNumber(+baseTriangle);
            } while (isNaN(+baseTriangle) || +baseTriangle <= 0 || +baseTriangle > 100);
            do {
                heightTriangle = prompt("Ingrese la altura de su triángulo rectángulo", "");
                validateNumber(+heightTriangle);
            } while (isNaN(+heightTriangle) || +heightTriangle <= 0 || +heightTriangle > 100);
            result = `El área del triángulo con base ${baseTriangle} y altura ${heightTriangle} es ${((+baseTriangle * +heightTriangle) / 2).toFixed(2)}`;
            break;
    }
    
    if (result) {
        alert(result);
        resultCtn.innerText = result;
        let current = counter.innerText;
        counter.innerText = +current + 1;
    }
}

makeCalculation();

button.addEventListener("click", makeCalculation)