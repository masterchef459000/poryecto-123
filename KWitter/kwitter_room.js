
//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyDeGZUVScuAOpJpN5H02_qFRWQm8YMuh74",
      authDomain: "kwiter-36e61.firebaseapp.com",
      databaseURL: "https://kwiter-36e61-default-rtdb.firebaseio.com",
      projectId: "kwiter-36e61",
      storageBucket: "kwiter-36e61.appspot.com",
      messagingSenderId: "381552173336",
      appId: "1:381552173336:web:fd4a0be3a794999f757e6d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    document.getElementById("ueser_name").innerHTML="bienvenido "+user_name;

    function addRoom(){
      room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"agregando sala"
    });
localStorage.setItem("room_name",room_name);
window.location="kWitter_page.html";}   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log(firebase_message_id);
      console.log(message_data);
      name=message_data['name'];
      message=message_data['message'];
      like=message_data['like'];
      name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();
function rediretToRoomName(name){
  console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
window.location.replace("index.html");
}
