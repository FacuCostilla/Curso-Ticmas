/*
document.getElementById(`boton`).onclick = function () {
    console.log("Capturamos el evento Click");
    document.getElementById('demo').innerHTML = Date();
};

document.addEventListener(`click`, function () {
    console.log("Hola Mundo desde EventListener");
    document.getElementById('demo').innerHTML = "Probando Primer Evento";
});*/

document.getElementById(`boton`).addEventListener(`click`, function () {
    console.log("Hola Mundo desde EventListener");
    document.getElementById('demo').innerHTML = "Probando Primer Evento";
});

document.getElementById(`boton_color`).addEventListener(`click`, function () {
    document.body.style.backgroundColor = "red";
});

document.getElementById(`boton_default`).addEventListener(`click`, function () {
    document.body.style.backgroundColor = "blue";
});
document.getElementById(`boton_hide`).addEventListener(`click`, function () {
    document.getElementById(`demo`).style.display = "none";
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "green";
}





