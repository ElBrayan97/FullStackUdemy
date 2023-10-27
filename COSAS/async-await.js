const userList = document.getElementById("lista-usuarios");

function reqListener(){
    //console.log(this.responseText);
    const users = JSON.parse(this.responseText);
    console.log(users);
    const usuariosRender = users
        .map(singleUser => `<li>${singleUser.nombre}</li>`)
        .join("");
        console.log(usuariosRender)
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load",reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();