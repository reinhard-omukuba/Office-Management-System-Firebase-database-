//onclick of the login button
document.getElementById("login").onclick = function(){
    //get values from the db
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //signing in the user

    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) =>{

        ///redirect user if the credential are successful
        window.location.href = "dashboard.html";

    }).catch((error) =>{
        //if the signin is not successfull dissplay an error message on alert
        var errorMessage = error.message;
        alert(errorMessage);
    })

}