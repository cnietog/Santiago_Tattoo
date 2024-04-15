var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

// Lista de productos en formato JSON
var productsJSON = '[{"id":1,"title":"Bandana","Url":"img/Bandana.png","precio":5000,"cantidad":20},{"id":2,"title":"Bolso de transporte","Url":"img/Bolso_de_transporte.jpg","precio":5000,"cantidad":20},{"id":3,"title":"Cama","Url":"img/Cama.jpg","precio":10000,"cantidad":20},{"id":4,"title":"Correa","Url":"img/Correa.jpg","precio":30000,"cantidad":20},{"id":5,"title":"Dispensador de alimento","Url":"img/Dispensador_de_alimento.jpg","precio":1500,"cantidad":20},{"id":6,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":7,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":8,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":9,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":10,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":11,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":12,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":13,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":14,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":15,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":16,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":17,"title":"Identificacion","Url":"img/Identificacion.png","precio":9000,"cantidad":20},{"id":18,"title":"Juguete hueso entretenido","Url":"img/Juguete_hueso_entretenido.jpg","precio":10000,"cantidad":20}]';

// Convertir la lista de productos de JSON a objeto JavaScript
var products = JSON.parse(productsJSON);

// Obtener el contenedor donde se mostrará la lista de productos
var productListContainer = document.getElementById("product-list");

// Recorrer la lista de productos y crear elementos HTML para cada producto
products.forEach(function(product) {
  // Crear un elemento de imagen
  var img = document.createElement("img");
  img.src = product.Url;

  // Crear un elemento de título
  var title = document.createElement("h3");
  title.textContent = product.title;

  // Crear un elemento de precio
  var price = document.createElement("p");
  price.textContent = "Precio: $" + product.precio;

  // Crear un elemento de cantidad en stock
  var stock = document.createElement("p");
  stock.textContent = "Stock: " + product.cantidad;

  // Crear un elemento contenedor para cada producto
  var productContainer = document.createElement("div");
  productContainer.appendChild(img);
  productContainer.appendChild(title);
  productContainer.appendChild(price);
  productContainer.appendChild(stock);

  // Agregar el contenedor del producto al contenedor principal
  productListContainer.appendChild(productContainer);
});

// Recorrer la lista de productos y crear elementos HTML para cada producto
products.forEach(function(product) {
  // Crear un contenedor para cada producto
  var productContainer = document.createElement("div");
  productContainer.className = "col-lg-4 col-md-6 col-sm-6 d-flex";

  // Crear la tarjeta del producto
  var card = document.createElement("div");
  card.className = "card w-100 my-2 shadow-2-strong";

  // Crear la imagen del producto
  var img = document.createElement("img");
  img.src = product.Url;
  img.className = "card-img-top";
  card.appendChild(img);

  // Crear el cuerpo de la tarjeta
  var cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex flex-column";
  
  // Crear el contenedor del precio
  var priceContainer = document.createElement("div");
  priceContainer.className = "d-flex flex-row";

  // Crear el precio actual del producto
  var price = document.createElement("h5");
  price.className = "mb-1 me-1";
  price.textContent = "$" + product.precio.toFixed(2);
  priceContainer.appendChild(price);

  // Crear el precio anterior del producto
  var oldPrice = document.createElement("span");
  oldPrice.className = "text-danger";
  oldPrice.innerHTML = "<s>$" + product.oldPrice.toFixed(2) + "</s>";
  priceContainer.appendChild(oldPrice);

  // Agregar el contenedor de precios al cuerpo de la tarjeta
  cardBody.appendChild(priceContainer);

  // Crear el texto del producto
  var text = document.createElement("p");
  text.className = "card-text";
  text.textContent = product.description;
  cardBody.appendChild(text);

  // Crear el pie de la tarjeta
  var cardFooter = document.createElement("div");
  cardFooter.className = "card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto";

  // Crear el botón de "Agregar al carro"
  var addToCartBtn = document.createElement("a");
  addToCartBtn.href = "#!";
  addToCartBtn.className = "btn btn-primary shadow-0 me-1";
  addToCartBtn.textContent = "Agregar al carro";
  cardFooter.appendChild(addToCartBtn);

  // Crear el botón de "Agregar a favoritos"
  var addToFavoritesBtn = document.createElement("a");
  addToFavoritesBtn.href = "#!";
  addToFavoritesBtn.className = "btn btn-light border icon-hover px-2 pt-2";
  addToFavoritesBtn.innerHTML = '<i class="fas fa-heart fa-lg text-secondary px-1"></i>';
  cardFooter.appendChild(addToFavoritesBtn);

  // Agregar el cuerpo y el pie de la tarjeta a la tarjeta
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  // Agregar la tarjeta al contenedor del producto
  productContainer.appendChild(card);

  // Agregar el contenedor del producto al contenedor principal
  productListContainer.appendChild(productContainer);
});
