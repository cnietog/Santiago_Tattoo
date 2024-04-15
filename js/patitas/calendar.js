let calendar = document.querySelector('.calendar');

const month_names = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days');
    let calendar_header_year = calendar.querySelector('#year');

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    calendar_days.innerHTML = '';

    let currDate = new Date();
    if (month === undefined) month = currDate.getMonth();
    if (year === undefined) year = currDate.getFullYear();

    let curr_month = `${month_names[month]}`;
    month_picker.innerHTML = curr_month;
    calendar_header_year.innerHTML = year;

    // Obtener el primer dia del mes

    let first_day = new Date(year, month, 1);
    let starting_day = first_day.getDay();
    if (starting_day === 0) starting_day = 7;

    for (let i = 1; i <= days_of_month[month] + starting_day - 1; i++) {
        let day = document.createElement('div');
        if (i >= starting_day) {
            day.classList.add('calendar-day-hover');
            day.innerHTML = i - starting_day + 1;
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`;
            if (i - starting_day + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date');
            }
        }
        calendar_days.appendChild(day);
    }
}

let month_list = calendar.querySelector('.month-list');

month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div data-month="${index}">${e}</div>`;
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show');
        curr_month.value = index;
        generateCalendar(index, curr_year.value);
    }
    month_list.appendChild(month);
})

let month_picker = calendar.querySelector('#month-picker');

month_picker.onclick = () => {
    month_list.classList.add('show');
}

let currDate = new Date();

let curr_month = {value: currDate.getMonth()};
let curr_year = {value: currDate.getFullYear()};

generateCalendar(curr_month.value, curr_year.value);

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value;
    generateCalendar(curr_month.value, curr_year.value);
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value;
    generateCalendar(curr_month.value, curr_year.value);
}

let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
    document.querySelector('.content__calendar').classList.toggle('light')
    document.querySelector('.content__calendar').classList.toggle('dark')
}




//--- Botón en cada día del calendario para agregar un recordatorio
function mostrarFechaSeleccionada(celda) {
    // Obtiene la fecha asociada a la celda
    const cellDate = celda.dataset.date;
    
    // Muestra la fecha seleccionada en el elemento correspondiente
    const selectedDateElem = document.getElementById('selected-date');
    selectedDateElem.textContent = `Fecha seleccionada: ${cellDate}`;
}

  
  
  
  
  
  









//EFECTO DE SONIDO BOTON WHATTSAP

$(function() {
    /**** INICIO ZONA EDITABLE ****/
    var sound_mp3 = "sonidos/patitas/ladrido.mp3";

    /**** FIN ZONA EDITABLE ****/
  
    $('body').prepend('<audio><source src="' + sound_mp3 + '"></source></audio>');
    var audio = $("audio")[0];
    $("#boton__whatsap").mouseenter(function() {
      audio.play();
    });
  });