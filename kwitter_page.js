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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name']
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name+"</h4>";
         message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_button ="<button class='btn btn-warning' id="+fibebase_message_id+"value="+like+"onclick='uploateLike(this.id)'>Likes :"+like +"</button>";
         row = name_with_tag + message_with_tag +like_button;
        document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function send()
{
      msg = document.getElementById8("msg").value;
      firebase.database(). ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}

function uploateLike(message_id)
{
      console.log("presionó el boton de Me gusta: " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
        lik : updated_likes
      });

}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("rom_name");
      window.location.replace("kwitter.html");
}