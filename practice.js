
var firebaseConfig = {
    apiKey: "AIzaSyBW7XI-7pebaSl9KOMWnkbC9rTBKuhAHQ8",
    authDomain: "social-website-a4605.firebaseapp.com",
    databaseURL: "https://social-website-a4605-default-rtdb.firebaseio.com",
    projectId: "social-website-a4605",
    storageBucket: "social-website-a4605.appspot.com",
    messagingSenderId: "197444527050",
    appId: "1:197444527050:web:4fe82bca3338da0b52a533"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("User_Name").value;
    firebase.database().ref("/").child(User_Name).update({
        purpose : "adding user"
    });
}