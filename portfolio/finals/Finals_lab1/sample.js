// window.onload = function(){
//             var name = "Cubacub Ampaguey";
//             alert("NAME: " + name);
//         }


function calculatesum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = "SUM: " + result;
}

function calculatediff() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").innerHTML ="DIFFERENCE: " + result;
}

function calculateproduct() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;  
    document.getElementById("result").innerHTML ="PRODUCT: " + result;
}

function calculatequotient() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 / num2; 
    document.getElementById("result").innerHTML ="QUOTIENT: " + result;}


