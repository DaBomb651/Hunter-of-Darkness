// Game settings
const player = document.getElementById("player");
const gameContainer = document.getElementById("game-container");

// Player starting position (centered)
let playerX = window.innerWidth / 2;
let playerY = window.innerHeight / 2;

// World size (larger than the screen)
let worldWidth = 3000;
let worldHeight = 3000;

// Player movement speed
const speed = 5;

// Event listener for movement (WASD / Arrow keys)
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
    case "ArrowUp":
      playerY -= speed;
      break;
    case "s":
    case "ArrowDown":
      playerY += speed;
      break;
    case "a":
    case "ArrowLeft":
      playerX -= speed;
      break;
    case "d":
    case "ArrowRight":
      playerX += speed;
      break;
  }

  // Update player position
  updatePlayerPosition();
});

// Update player position based on input
function updatePlayerPosition() {
  // Make sure player stays within world bounds
  playerX = Math.max(0, Math.min(worldWidth - 50, playerX));
  playerY = Math.max(0, Math.min(worldHeight - 50, playerY));

  // Update the player's position on the screen
  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;

  // Scroll the world to keep the player centered
  gameContainer.style.transform = `translate(-${playerX - window.innerWidth / 2}px, -${playerY - window.innerHeight / 2}px)`;
}
