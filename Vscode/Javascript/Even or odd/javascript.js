function number() {
    let number = document.getElementById("usersnumber").value;
    console.log(number);
    
    if (number % 2 == 0  ) {
        console.log("even");
        document.getElementById("dropzone").innerHTML = number + " " +  "is and Even Number";
    }
    else {
        document.getElementById("dropzone").innerHTML = number + " " +  "is and Odd Number";
    }
}