// Variables del juego
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var dogImage = new Image();
dogImage.src = "img/juego/dog.png";
var catImage = new Image();
catImage.src = "img/juego/cat.png";
var dogWidth = 50;
var dogHeight = 50;
var dogX = 50;
var dogY = canvas.height - dogHeight - 10;
var obstacleWidth = 50;
var obstacleHeight = 50;
var obstacleX = canvas.width;
var obstacleY = canvas.height - obstacleHeight - 10;
var obstacleSpeed = 2;
var score = 0;
var isGameOver = false;
var jumpHeight = 6; // Altura del salto del perro
var isJumping = false; // Indicador de salto
var jumpStartTime = null; // Tiempo de inicio del salto
var gameTime = 0; // Tiempo transcurrido
var scoreElement = document.getElementById("score");
var timeElement = document.getElementById("time");

// Control del perro
document.addEventListener("keydown", function(event) {
  if (event.code === "Space" && !isGameOver && !isJumping) {
    isJumping = true;
    jumpStartTime = Date.now();
  }
});

// Actualización del juego
function update() {
  if (!isGameOver) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawDog();
    drawObstacle();
    updateObstacle();
    updateJump();
    updateGameTime();
    requestAnimationFrame(update);
  }
}

// Dibuja el perro o gato en el lienzo
function drawDog() {
  if (isGameOver) {
    context.drawImage(catImage, dogX, dogY, dogWidth, dogHeight);
  } else {
    context.drawImage(dogImage, dogX, dogY, dogWidth, dogHeight);
  }
}

// Dibuja el obstáculo en el lienzo
function drawObstacle() {
  context.drawImage(catImage, obstacleX, obstacleY, obstacleWidth, obstacleHeight);
}

// Actualiza la posición del obstáculo
function updateObstacle() {
    if (obstacleX + obstacleWidth >= 0) {
      obstacleX -= obstacleSpeed;
    } else {
      // El obstáculo ha pasado el lienzo
      obstacleX = canvas.width;
      score++;
      scoreElement.textContent = score;
    }
  
    if (isCollision()) {
      jumpStartTime = Date.now(); // Reinicia el tiempo de salto
    }
  }
  

// Actualiza el salto del perro
function updateJump() {
  if (isJumping) {
    var elapsedTime = Date.now() - jumpStartTime;
    if (elapsedTime < 300) { // Mantenerse 0.3 segundos en el aire
      dogY -= 4;
    } else {
      isJumping = false;
    }
  } else {
    if (dogY < canvas.height - dogHeight - 10) {
      dogY += 4; // Comienza a bajar después de saltar
    }
  }
}

// Actualiza el tiempo transcurrido del juego
function updateGameTime() {
  if (!isGameOver) {
    gameTime = Math.floor((Date.now() - jumpStartTime) / 1000); // Calcula el tiempo transcurrido en segundos
    timeElement.textContent = gameTime;
  }
}

// Comprueba si hay colisión entre el perro y el obstáculo
function isCollision() {
  return (
    dogX < obstacleX + obstacleWidth &&
    dogX + dogWidth > obstacleX &&
    dogY < obstacleY + obstacleHeight &&
    dogY + dogHeight > obstacleY
  );
}

// Termina el juego
function gameOver() {
  isGameOver = true;
  dogImage.src = "cat.png"; // Cambia la imagen a un gato
  alert("Juego terminado. Puntuación: " + score + " Tiempo: " + gameTime + " segundos.");
}

// Abre el modal y comienza el juego al hacer clic en el botón
var openModalBtn = document.getElementById("openModalBtn");
openModalBtn.addEventListener("click", function() {
  var gameModal = document.getElementById("gameModal");
  gameModal.style.display = "block";
  jumpStartTime = Date.now(); // Reinicia el tiempo al abrir el modal
  update();
});

// Cierra el modal al hacer clic en el botón de cierre
var closeModalBtn = document.getElementsByClassName("btn-close")[0];
closeModalBtn.addEventListener("click", function() {
  var gameModal = document.getElementById("gameModal");
  gameModal.style.display = "none";
});
