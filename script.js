var fechaActual = new Date();

// Días de la semana en Portugués
var diasSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
];

// Meses en Portugués
var meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

// Obtener el número del día, mes y año
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth();
var ano = fechaActual.getFullYear();

// Formatear la fecha actual en el formato deseado
var fechaFormateada = ano + ", " + dia + " de " + meses[mes];

// Mostrar la fecha en el calendario
document.getElementById("calendario").innerText = fechaFormateada;

function openWidget(widgetId) {
  var widgetElement = document.getElementById(widgetId);
  widgetElement.style.display = "flex";
}

function closeWidget(widgetId) {
  var widgetElement = document.getElementById(widgetId);
  widgetElement.style.display = "none";
}

function playVideo(videoId) {
  var video = document.getElementById(videoId);
  video.play();
}

function pauseVideo(videoId) {
  var video = document.getElementById(videoId);
  video.pause();
}