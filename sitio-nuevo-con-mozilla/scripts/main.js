let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = " CHECA MI PAGINA NUEVA, " + miNombre;
    }
  }
  if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "OLIVER es genial," + nombreAlmacenado;
  }
  miBoton.onclick = function () {
    estableceNombreUsuario();
  };
  
  