function solve(){
    let number =parseInt(document.getElementById("number").value); 
    let expo = parseInt(document.getElementById("exponets").value);
    console.log(number);
    console.log(expo);
let newNumber = number ** expo;

    document.getElementById("here").innerHTML = newNumber;
    console.log(newNumber);
    
}