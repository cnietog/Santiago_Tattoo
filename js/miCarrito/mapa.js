
    mapboxgl.accessToken = 'pk.eyJ1IjoidWxtb3IiLCJhIjoiY2xpN2wzY2NiMHJvbDNlczVxZjFhbTU2ZCJ9.NOOM5PpRmdMaoZLlfyElwg';

    // Crea una instancia del mapa
    var map = new mapboxgl.Map({
      container: 'map', // ID del contenedor del mapa
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa (puedes elegir otro)
      center: [-70.75248151796418,-33.51112012371187], // Coordenadas de ubicación inicial del mapa
      zoom: 12 // Nivel de zoom inicial
    });
  
    // Crea un elemento div para el marcador personalizado
    var el = document.createElement('div');
    el.className = 'marker';

    // Establece el estilo del marcador personalizado
    el.style.backgroundImage = 'url(img/miCarrito/mario.png)'; // Ruta de la imagen de la estrella roja
    el.style.width = '40px';
    el.style.height = '40px';

    // Crea el marcador de Mapbox y establece la ubicación
    var marker = new mapboxgl.Marker(el)
    .setLngLat([-70.75248151796418, -33.51112012371187]) // Coordenadas de ubicación del marcador
    .addTo(map);

    // Crea una etiqueta personalizada
    var popup = new mapboxgl.Popup({ offset: 25 }).setText('Tienda 1');

    // Asocia la etiqueta al marcador
    marker.setPopup(popup);

    //------------------------------------------------------------------
    // Agrega el marcador de destino
    var el = document.createElement('div');
    el.className = 'Destino';

    // Establece el estilo del marcador personalizado
    el.style.backgroundImage = 'url(img/miCarrito/estrella.png)'; // Ruta de la imagen de la estrella roja
    el.style.width = '40px';
    el.style.height = '40px';

    // Agrega el marcador al mapa
    new mapboxgl.Marker(el)
    .setLngLat([-70.74950438635288, -33.50056060202945]) // Coordenadas del marcador de destino
    .addTo(map);


    //--------------------------------------------