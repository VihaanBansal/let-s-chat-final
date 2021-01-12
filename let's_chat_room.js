
  var firebaseConfig = {
    apiKey: "AIzaSyAmbOoUEPWlHVo7969VqSyzDB8LVTVsUKU",
    authDomain: "let-s-chat-59bcf.firebaseapp.com",
    projectId: "let-s-chat-59bcf",
    storageBucket: "let-s-chat-59bcf.appspot.com",
    messagingSenderId: "343572387448",
    appId: "1:343572387448:web:619f6fdab702953c317f8d",
    measurementId: "G-14DZ77G8XX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name +"!"

function addRoom()
{
 room_name = document.getElementById("room_name").value;
 console.log(room_name);
 firebase.database().ref("/").child(room_name).update({
      purpose : "adding room"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name =", Room_names);
row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}