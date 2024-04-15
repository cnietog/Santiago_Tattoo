const selectorPerros = document.getElementById("selector-perros");
const tablaPerros = document.getElementById("tabla-perros");

// Función para cargar la lista de perros en el selector
function cargarSelectorPerros() {
  return fetch('https://api.thedogapi.com/v1/breeds', {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json', 
      'x-api-key': 'live_oruParQZ4VQlVxNjJdLCOrh9E7Tt1rjnEFjEDGh108CN96B721NuFuSswzB5NX8I' // Agrega tu propia clave API aquí
    }
  })
  .then(response => response.json())
  .then(data => {
    data.forEach(perro => {
      const opcion = document.createElement("option");
      opcion.value = perro.id;
      opcion.text = perro.name;
      selectorPerros.appendChild(opcion);
    });
  })
  .catch(error => console.error(error));
}

// Función para cargar la información del perro seleccionado en la tabla
function cargarPerro(id) {
  return fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json', 
      'x-api-key': 'live_oruParQZ4VQlVxNjJdLCOrh9E7Tt1rjnEFjEDGh108CN96B721NuFuSswzB5NX8I' // Agrega tu propia clave API aquí
    }
  })
  .then(response => response.json())
  .then(data => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${data.name}</td>
      <td>${data.breed_group}</td>
      <td>${data.weight.metric}</td>
      <td>${data.height.metric}</td>
      <td>${data.life_span}</td>
      <td>${data.temperament}</td>

    `;
    tablaPerros.innerHTML = "";
    tablaPerros.appendChild(fila);
  })
  .catch(error => console.error(error));
}
function mostrarImagenPerroSeleccionado() {
    const selectorPerros = document.getElementById('selector-perros');
    const idPerroSeleccionado = selectorPerros.value;
    const urlImagen = `https://api.thedogapi.com/v1/images/search?breed_id=${idPerroSeleccionado}`;
  
    fetch(urlImagen, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json', 
        'x-api-key': 'live_oruParQZ4VQlVxNjJdLCOrh9E7Tt1rjnEFjEDGh108CN96B721NuFuSswzB5NX8I'
      }
    })
    .then(response => response.json())
    .then(data => {
      const imagenPerroSeleccionado = document.getElementById('imagen-perro-seleccionado');
      imagenPerroSeleccionado.src = data[0].url;
      imagenPerroSeleccionado.alt = `Imagen de ${selectorPerros.options[selectorPerros.selectedIndex].text}`;
    })
    .catch(error => console.error(error));
    
    }

// Cargar la lista de perros en el selector al cargar la página
cargarSelectorPerros();

function cargarPerros() {
    const url = 'https://api.thedogapi.com/v1/breeds';
  
    fetch(url, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json', 
        'x-api-key': 'live_oruParQZ4VQlVxNjJdLCOrh9E7Tt1rjnEFjEDGh108CN96B721NuFuSswzB5NX8I'
      }
    })
    .then(response => response.json())
    .then(data => {
      const selectorPerros = document.getElementById('selector-perros');
  
      data.forEach(perro => {
        const option = document.createElement('option');
        option.value = perro.id;
        option.text = perro.name;
        selectorPerros.add(option);
      });
  
      mostrarImagenPerroSeleccionado();
    })
    .catch(error => console.error(error));
  }
  
  function mostrarImagenPerroSeleccionado() {
    const selectorPerros = document.getElementById('selector-perros');
    const idPerroSeleccionado = selectorPerros.value;
    const urlImagen = `https://api.thedogapi.com/v1/images/search?breed_id=${idPerroSeleccionado}`;
  
    fetch(urlImagen, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json', 
        'x-api-key': 'live_oruParQZ4VQlVxNjJdLCOrh9E7Tt1rjnEFjEDGh108CN96B721NuFuSswzB5NX8I'
      }
    })
    .then(response => response.json())
    .then(data => {
      const imagenPerroSeleccionado = document.getElementById('imagen-perro-seleccionado');
      imagenPerroSeleccionado.src = data[0].url;
      imagenPerroSeleccionado.alt = `Imagen de ${selectorPerros.options[selectorPerros.selectedIndex].text}`;
    })
    .catch(error => console.error(error));
  }
  
  function inicializarSelectorPerros() {
    const selectorPerros = document.getElementById('selector-perros');
  
    selectorPerros.addEventListener('change', mostrarImagenPerroSeleccionado);
  }
  
  window.onload = function() {
    cargarPerros();
    inicializarSelectorPerros();
  };
// Agregar un escucha de cambio al selector
selectorPerros.addEventListener("change", (event) => {
  const perroId = event.target.value;
  cargarPerro(perroId);
});




