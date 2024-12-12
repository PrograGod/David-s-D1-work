function calc(){
    let hoursWorked = parseInt(document.getElementById("hoursworked").value);
    let overTime = parseInt(document.getElementById("overtime").value);
    let hourlyWage = parseInt(document.getElementById("moneyperhour").value);
    let payedAmout = hoursWorked * hourlyWage;
    console.log(payedAmout, overTime)
}