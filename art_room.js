const firebaseConfig = {
    apiKey: "AIzaSyCuCbNuXV_TKKymQ6BgXSHUk7XnDU39ae0",
    authDomain: "art-webapp-35f4d.firebaseapp.com",
    databaseURL: "https://art-webapp-35f4d-default-rtdb.firebaseio.com",
    projectId: "art-webapp-35f4d",
    storageBucket: "art-webapp-35f4d.appspot.com",
    messagingSenderId: "938591078709",
    appId: "1:938591078709:web:b88f633f3ca8bf29e9a47c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "art_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "art_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "art.html";
}
