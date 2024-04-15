const heartIcon = document.querySelector(".like-button .heart-icon");
const likesAmountLabel = document.querySelector(".like-button .likes-amount");

let likesAmount = parseInt(localStorage.getItem("likesAmount")) || 7; // Obtener la cantidad de likes almacenada en el Web Storage o usar 7 como valor predeterminado

heartIcon.addEventListener("click", () => {
  if (!getCookie("likeClicked")) {
    // Si no hay una cookie "likeClicked" presente
    setCookie("likeClicked", true, 365); // Crear una cookie "likeClicked" con una duración de 365 días (puedes ajustar la duración según tus necesidades)

    heartIcon.classList.add("liked"); // Marcar el botón como clickeado

    likesAmount++;
    likesAmountLabel.innerHTML = likesAmount;

    localStorage.setItem("likesAmount", likesAmount); // Guardar la cantidad de likes en el Web Storage
  }
});

// Función para obtener el valor de una cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

// Función para establecer una cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
