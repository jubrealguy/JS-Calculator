var first = parseInt(prompt("Enter first number"))
var operator = prompt("Enter operator from (-, +. *, /, %)")
var second = parseInt(prompt("Enter second number"))

function maths() {
    if (operator === "+") {
        alert(first + second);
    }

    else if (operator === "-") {
        alert(first - second);
    }

    else if (operator === "*") {
        alert(first * second);
    }

    else if (operator === "/") {
        alert(first / second);
    }

    else if (operator === "%") {
        alert(first % second);
    }
}
maths();