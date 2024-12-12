function convert(){
    let temp = parseInt(document.getElementById("temp").value);
    fahrenheit = temp;
    celsius = (temp - 32) * 5/9;
    console.log(celsius);
    console.log(fahrenheit);
document.getElementById("result").innerHTML = fahrenheit + " "+ " degree Fahrenheit" + " "+ "and" + " " + celsius + " " + " degree Celsuis";
}