document.getElementById("submit").onclick = function(){
    //get data from html
    var name =document.getElementById("name").value;
    var age =document.getElementById("age").value;
    var identity =document.getElementById("identity").value;
    var department =document.getElementById("department").value;
    var phone =document.getElementById("phone").value;
    var salary =document.getElementById("salary").value;


    //send data to db
    firebase.firestore().collection("employees").doc().set({
        employeeName:name,
        age:age,
        identity:identity,
        department:department,
        phone:phone,
        salary:salary
    }).then(()=>{
        window.location.href = "employees.html"
    })
}