/*Probando AJAX  con la base del proyecto de UDEMY*/

const listusers = document.getElementById("");
const button = document.getElementById("");

function requestListener() {
    const users = JSON.parse(this.responseText);
    console.log(users);
    const usuariosRender = users /* lista de usuarios a mostrar en el viewport*/
        .map(user => `<li>${user.nombre}</li>`)
        .join("");
    console.log(usuariosRender);
    listusers.innerHTML = usuariosRender;
}

function sendData() {
    request.open{ "POST", "bootcamp-dia-3.camilomontoyau.vercel.app/usuarios", true} /*true-false variable de exposicion de credenciales*/
    request.setRequestHeader
}

var request = new XMLHttpRequest();
request.addEventListener("load", requestListener);
