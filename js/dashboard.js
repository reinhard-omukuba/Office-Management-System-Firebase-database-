//check if a user in signed and who it is
firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        //if user is signed in

        //find out which user is logged in by listening to the id

        var userId = user.uid;
        console.log(userId);


    }else{
        //if the user in not signed in, rederict back to login page
        window.location.href = "index.html"
    }
})