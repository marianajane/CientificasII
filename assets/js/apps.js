var muestraImagen= document.getElementsByClassName('workImage');

[].forEach.call(muestraImagen, function(elemento){
 elemento.addEventListener("click",ampliaImagen);
})

var ocultaImagen=document.getElementsByClassName("closebtn");
[].forEach.call(ocultaImagen,function(elemento){
  elemento.addEventListener("click",closeNav);
})

function ampliaImagen() {

  this.previousElementSibling.style.width="100%";
}
function closeNav() {
 this.parentNode.style.width="0%";
}
