
function combo_distrito() {
  var x = document.getElementById("cbdistrito").value;
  
  if (x==1) {
   window.location.href='./gubernatura_distrito.html';  
  }    
}

 function combo_seccion() {
  var x = document.getElementById("cbseccion").value;
  
  if (x==1) {
   window.location.href='./gubernatura_distrito_seccion.html';  
  } 
}

 function combo_casilla() {
  var x = document.getElementById("cbcasilla").value;
  
  if (x==1) {
   window.location.href='./gubernatura_distrito_casilla.html';  
  } 
}

function combo_distrito_ppc() {
  var x = document.getElementById("cbdistrito").value;
  
  if (x==1) {
   window.location.href='./gubernatura_distrito_ppc.html';  
  }    
}

function selecciona(valor) {
  var  b1 = document.getElementById(valor);  
  
  if (b1.classList.item(7) == null) {
    b1.classList.add("seleccionado");
    b1.innerHTML = "<p>Quitar Selección</p>";
  } else {
    b1.classList.remove("seleccionado");  
    b1.innerHTML = "<p>Seleccionar</p>";
  }
}