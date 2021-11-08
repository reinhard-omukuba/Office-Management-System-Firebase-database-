//check if a user in signed and who it is
firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        //if user is signed in
        //find out which user is logged in by listening to the id
        var userId = user.uid;
        console.log(userId);

        //pullind data from firebase

        firebase.firestore().collection("users").doc(userId).get().then((doc) =>{

            var userName = doc.data().userName;
            var phone = doc.data().phoneNumber;
            var email = doc.data().userEmail;

            //set the above information to html
            document.getElementById("name").innerHTML = userName;
            document.getElementById("phone").innerHTML = phone;
            document.getElementById("email").innerHTML = email;

            

        })


    }else{
        //if the user in not signed in, rederict back to login page
        window.location.href = "index.html"
    }
})