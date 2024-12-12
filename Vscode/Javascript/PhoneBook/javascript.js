function add(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let mainTable = document.getElementById("table3")
    console.log(firstname, lastname, phonenumber);


   
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let edit = document.createElement("td")


    td1.innerHTML = firstname;
    td2.innerHTML = lastname;
    td3.innerHTML = phonenumber;
    edit.innerHTML = '<input type="button" value="edit"/>';
    

    mainTable.appendChild(tr1);
    tr1.appendChild(td1, edit);
    tr1.appendChild(td2);
    tr1.appendChild(td3);





  

}
