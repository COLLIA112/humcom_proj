
function getResult() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    
    var result1 = " ";
    var result2 = " ";

    if (num1%2==0){
        result1= "THE NUMBER IS EVEN";
        document.getElementById("result1").innerHTML = result1;}
    else {
        result1= "THE NUMBER IS ODD";
        document.getElementById("result1").innerHTML = result1;}
    
        var i;
        var count=0;

    if (num1<=1) {
        result2= "INVALID";
        document.getElementById("result2").innerHTML = result2;
    }
    else{
        for (i=1; i<=num1; i++){
   
            if (num1%i==0) {
                count++;
            }
    }
    if (count<=2) {
        result2= "THE NUMBER IS PRIME";
        document.getElementById("result2").innerHTML = result2;}
    else{
        result2= "THE NUMBER IS COMPOSITE";
        document.getElementById("result2").innerHTML = result2;};
    }
}


  
    





