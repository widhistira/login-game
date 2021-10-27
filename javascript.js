let onClick = () => {
let username = document.getElementById("username")
let password = document.getElementById("password")

let config = {
method: "post",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
username: username.value,
password: password.value
})
}

fetch("/", config)
.then(response => response.json())
.then(result => {
console.log(result)
if (result.message === "Login Successful") {
alert(result.message)
window.location.href = "/"
}
// sessionStorage.setItem("login-data", JSON.stringify(result))
})
.catch(err => console.log(err))

username = ""
password = ""
}

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src = "../login/asset/img/paused.png";
    }else{
        mySong.pause();
        icon.src = "../login/asset/img/play.png";
    }
}