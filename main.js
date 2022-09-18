
const boton_menu = document.querySelector("#Btn_menu");
const home_menu = document.querySelector("#nav_menu");

    boton_menu.addEventListener("click", function () {
    home_menu.classList.toggle("navMenu__show")
});

const array = [];
let id1,id2,id3,id4,id5,id6;
array.push( id1 = document.querySelector(".id_menu1"));
array.push( id2 = document.querySelector(".id_menu2"));
array.push( id3 = document.querySelector(".id_menu3"));
array.push( id4 = document.querySelector(".id_menu4"));
array.push( id5 = document.querySelector(".id_menu5"));
array.push( id6 = document.querySelector(".id_menu6"));

function nada(array){
for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function () {
        home_menu.classList.remove("navMenu__show")
    })}};
 