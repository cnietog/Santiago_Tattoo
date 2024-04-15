document.addEventListener('DOMContentLoaded', () => {
  fetchPics();
});

let generadorGatos = document.querySelector(".generar_btn");

generadorGatos.addEventListener("click", fetchPics);

function fetchPics() {
  let catsImgDiv = document.querySelector(".catsImgDiv")
  catsImgDiv.innerHTML = ''

  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then((data) => {
    let catsImgUrl = data[0].url
    
    let catsImgEl = document.createElement("img");
    catsImgEl.setAttribute('src', `${catsImgUrl}`);
    catsImgEl.classList.add("showcase", "img-fluid");
    catsImgEl.style.borderRadius = "20px"; //Redondea las esquinas de la imagen
    
    let catsImgDiv = document.querySelector(".catsImgDiv")
    catsImgDiv.appendChild(catsImgEl)
  })
  .catch(err => console.log(err))
};