//andiamo a recuperare gli elementi dal dom
const EmailList = document.getElementById("email-list")
//andiamo a dichiarare le variabili
const arrayMail = [];
let items = 10;
const endpoint = `https:flynn.boolean.careers/exercises/api/random/mail?count=${items}`;
//vado a creare un for per ciclare l'array
for (let i = 0; i < items; i++) {
    