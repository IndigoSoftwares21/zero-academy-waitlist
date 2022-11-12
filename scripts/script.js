var firebaseConfig = {
    apiKey: "AIzaSyDWYa6ygrfbsSIGm8HPHWt7L6_QwJlOhSA",
    authDomain: "zero-academy.firebaseapp.com",
    projectId: "zero-academy",
    storageBucket: "zero-academy.appspot.com",
    messagingSenderId: "469556740504",
    appId: "1:469556740504:web:e568eaa0ea2867ec256bed"
  };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);


document.getElementById('btn').addEventListener('click',valid)
function valid() {
   var email = document.getElementById('email').value;
   if (email != '') {
       if (email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
       {
            send(email)
       }
}
}

function send(email) {
    const db = firebase.firestore();
    const date = new Date();
    var data = {
        email: email,
        date: date
    }
    db.collection("users").add(data)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('btn').innerHTML='Sent'
        document.getElementById('email').value = '';

    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
}