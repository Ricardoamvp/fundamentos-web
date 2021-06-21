/*
var: escopo global
let: escopo local
const: escopo global/constante
*/

let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

let nomeOk = false
let emailOk = false
let assuntoOk = false

let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txt = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txt = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txt.innerHTML = "Email Inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Email Válido"
        txt.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txt = document.querySelector("#txtAssunto")

    if (assunto.value.length > 200) {
        txt.innerHTML = "Você excedeu a quantidade de caracteres"
        txt.style.color = "red"
    } else {
        txt.innerHTML = ""
        assuntoOk = true
    }
}

function confirmarEnvio() {

    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Olá " + nome.value + ". Foi enviado um email de confirmação para " + email.value)
    } else {
        alert("Preencha os campos corretamente")
    }
}

function zoomMapa() {
    mapa.style.width = "800px"
    mapa.style.height = "600px" 
}

function normalMapa() {
    mapa.style.width = "450px"
    mapa.style.height = "350px" 
}