function calculate(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let grade1 = parseInt(document.getElementById("grade1").value);
    let grade2 = parseInt(document.getElementById("grade2").value);
    let grade3 = parseInt(document.getElementById("grade3").value); 
    let average = (grade1 + grade2 + grade3) / 3;
    let letterGrade;
    
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p")
    let p7 = document.createElement("p")
    if (average > 90 ) {
        letterGrade = "A";
    } else if (average > 80){
        letterGrade = "B";
    } else if (average > 70){
        letterGrade = "C";
    } else if (average > 60){
        letterGrade = "D";
    } else{
        letterGrade = "F";
    }
    legend.innerHTML = "OutPut"
    p1.innerHTML = "First Name: " + " " + firstName;
    p2.innerHTML = "Last Name: " +  " "+ lastName;
    p3.innerHTML = "Grade 1: " + " " + grade1;
    p4.innerHTML = "Grade 2: " + " " + grade2;
    p5.innerHTML = "Grade 3: " + " " + grade3;
    p6.innerHTML = "Average: " + " " + average.toFixed(0);
    p7.innerHTML = "Letter Grade: " + " " + letterGrade;
    
fieldset.appendChild(legend);
fieldset.appendChild(p1);
fieldset.appendChild(p2);
fieldset.appendChild(p3);
fieldset.appendChild(p4);
fieldset.appendChild(p5);
fieldset.appendChild(p6);
fieldset.appendChild(p7);


document.body.appendChild(fieldset);

}