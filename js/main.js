// Function for addition
const add = (a, b) => {
    return a + b;
}

// Function for subtraction
const subtract = (a, b) => {
    return a - b;
}

// Function for multiplication
const multiply = (a, b) => {
    return a * b;
}

// Function for division
const devide = (a, b) => {
    return a / b;
}

// Validate the form
const validate = () => {
    let valid = false;
    let operationsArray = document.myform.operation;
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = document.getElementById("result");

    if(operationsArray[0].checked && num1 !== '' && num2 !== ''){
        valid = true;
        result.innerHTML = `Answer: ${add(num1, num2)}`;
    }else if(operationsArray[1].checked && num1 !== '' && num2 !== ''){
        valid = true;
        result.innerHTML = `Answer: ${subtract(num1, num2)}`;
    }else if(operationsArray[2].checked && num1 !== '' && num2 !== ''){
        valid = true;
        result.innerHTML = `Answer: ${multiply(num1, num2)}`;
    }else if(operationsArray[3].checked && num1 !== '' && num2 !== '' && num2 !== 0){
        valid = true;
        result.innerHTML = `Answer: ${devide(num1, num2)}`;
    }else if(operationsArray[3].checked && num1 !== '' && num2 === 0){
        valid = true;
        result.innerHTML = `Answer: Undefined`;
    }else{
        alert("The fields can't be empty");
        return false;
    }
}

// reset the form
const formReset = () => {
    document.getElementById("myForm").reset();
    document.getElementById("result").innerHTML = '';
}