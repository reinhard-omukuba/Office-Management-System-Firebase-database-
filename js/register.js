//onclick of the button
document.getElementById("signup").onclick = function(){
    //get values from html
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //signing up a user
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredentials) =>{
        //get the user id after the above signup
        var userid = userCredentials.user.uid;

        //send user data such as name and phone to firestore
        firebase.firestore().collection("users").doc(userid).set({

            userName: name,
            phoneNumber: phone,
            userEmail: email,
            userId: userid

        }).then(()=>{
            window.location.href = "dashboard.html";
        })

    }).catch((error) =>{
        //display an error if the user is not successfully signedup
        var errorMessage = error.message;
        alert(errorMessage);
    })



}