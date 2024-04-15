moment.locale('es');

function actualizarHora() {
  var fecha = moment().format('dddd, DD [de] MMMM [del] YYYY');
  var horas = moment().format('HH');
  var minutos = moment().format('mm');
  document.getElementById('diaSemana').innerHTML = moment().format('dddd');
  document.getElementById('dia').innerHTML = moment().format('DD');
  document.getElementById('mes').innerHTML = moment().format('MMMM');
  document.getElementById('year').innerHTML = moment().format('YYYY');
  document.getElementById('horas').innerHTML = horas % 12 || 12;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('ampm').innerHTML = horas >= 12 ? 'PM' : 'AM';
  document.getElementById('hace').innerHTML = moment("2023-05-06T10:30:45").fromNow(true);
}

actualizarHora();
setInterval(actualizarHora, 1000)