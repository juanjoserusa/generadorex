/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusas").innerHTML = generadorexcusas();
  }); //write your code here

  console.log("Hello Rigo from the console!");
};

let generadorexcusas = () => {
  let pronombre = ["Unos", "Esos", "Algunos", "Dos millones de"];
  let sujeto = ["dinosaurios", "demogorgones", "tatarabuelos"];
  let verbo = [
    "cogieron mis",
    "escupieron mis",
    "se fumaron mis",
    "bailaron con mis",
    "procrastinaron con mis",
    "robaron mis"
  ];
  let posesion = ["deberes", "ejercicios", "fregonas", "pcs", "zapatos"];
  let donde = [
    "en la calle",
    "en el plató de tiburon",
    "en Hawkins",
    "en Triana",
    "en Monkey Island"
  ];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let verboIndex = Math.floor(Math.random() * verbo.length);
  let posesionIndex = Math.floor(Math.random() * posesion.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    verbo[verboIndex] +
    " " +
    posesion[posesionIndex] +
    " " +
    donde[dondeIndex]
  );
};
