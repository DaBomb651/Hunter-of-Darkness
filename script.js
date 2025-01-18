const player = document.getElementById('player');
const gameContainer = document.getElementById('game-container');

let playerX = 0;
let playerY = 0;
const playerSpeed = 5;

function updatePlayerPosition() {
    // Keep the player centered relative to the viewport
    player.style.transform = `translate(-50%, -50%) translate(${playerX}px, ${playerY}px)`;
}

function handleKeydown(event) {
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            playerY -= playerSpeed;
            break;
        case 's':
        case 'ArrowDown':
            playerY += playerSpeed;
            break;
        case 'a':
        case 'ArrowLeft':
            playerX -= playerSpeed;
            break;
        case 'd':
        case 'ArrowRight':
            playerX += playerSpeed;
            break;
    }
    updatePlayerPosition();
}

document.addEventListener('keydown', handleKeydown);

// Initialize the player position in the center of the screen
playerX = gameContainer.clientWidth / 2;
playerY = gameContainer.clientHeight / 2;
updatePlayerPosition();
