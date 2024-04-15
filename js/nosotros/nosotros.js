//funcionamiento de offcanvas
var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
});



// enlace de boton en carrito
document.getElementById("pagarBtn").addEventListener("click", function() {
    window.location.href = "./miCarrito.html";
});