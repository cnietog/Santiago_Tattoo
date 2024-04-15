mapboxgl.accessToken = 'pk.eyJ1IjoidWxtb3IiLCJhIjoiY2xpN2wzY2NiMHJvbDNlczVxZjFhbTU2ZCJ9.NOOM5PpRmdMaoZLlfyElwg';

// Crea una instancia del mapa
var map = new mapboxgl.Map({
  container: 'map', // ID del contenedor del mapa
  style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa (puedes elegir otro)
  center: [-70.75248151796418, -33.51112012371187], // Coordenadas de ubicación inicial del mapa
  zoom: 12 // Nivel de zoom inicial
});

// Crea el marcador de Mapbox y establece la ubicación
var marker = new mapboxgl.Marker({ color: '#d317aa' })
  .setLngLat([-70.75248151796418, -33.51112012371187]) // Coordenadas de ubicación del marcador
  .addTo(map);

// Crea una etiqueta personalizada
var popup = new mapboxgl.Popup({ offset: 25 }).setText('Tienda Patitas');

// Asocia la etiqueta al marcador
marker.setPopup(popup);
