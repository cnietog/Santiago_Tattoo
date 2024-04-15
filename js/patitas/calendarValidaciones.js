// Espera a que se cargue el documento
document.addEventListener('DOMContentLoaded', function() {
    // Obtén una referencia al formulario
    var form = document.getElementById('myForm');
  
    // Agrega un evento de escucha para el envío del formulario
    form.addEventListener('submit', function(event) {
      // Detén el envío del formulario
      event.preventDefault();
  
      // Valida los campos antes de enviar el formulario
      if (validateForm()) {
        // Si los campos son válidos, puedes enviar el formulario aquí
        console.log('Formulario válido. ¡Enviar formulario!');
        // form.submit();
      }
    });
  
    // Función para validar los campos del formulario
    function validateForm() {
      // Valida el campo de color de etiqueta
      var colorInput = document.getElementById('colorInput');
      if (!colorInput.value) {
        alert('Por favor, selecciona un color de etiqueta.');
        return false;
      }
  
      // Valida el campo de evento o recordatorio
      var textarea = document.getElementById('floatingTextarea2');
      if (!textarea.value.trim()) {
        alert('Por favor, agrega un evento o recordatorio.');
        return false;
      }
  
      // Si se pasan todas las validaciones, devuelve true
      return true;
    }
  });