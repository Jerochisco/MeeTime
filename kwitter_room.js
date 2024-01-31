const firebaseConfig = {
      apiKey: "AIzaSyDhS5U0atFntmkgIR47xpCvx_iALgPDlo8",
      authDomain: "ociales-28fdb.firebaseapp.com",
      databaseURL: "https://ociales-28fdb-default-rtdb.firebaseio.com",
      projectId: "ociales-28fdb",
      storageBucket: "ociales-28fdb.appspot.com",
      messagingSenderId: "23676696954",
      appId: "1:23676696954:web:7e4aa0ff37f57022fc7ec3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Te damos la vienvenida, " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwiter_page.html";

}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                    console.log("nombre de la sala: " + Room_names);
                    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
                    document.getElementById("output").innerHTML += row;
                  //Finaliza el código
            });
      });
}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "kwitter.html";
}