import pygame

# Initialize pygame
pygame.init()

# Screen dimensions
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Square properties
SQUARE_SIZE = 50
SQUARE_COLOR = (0, 128, 255)
SQUARE_SPEED = 5

# Initialize screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Square Movement Game")

# Clock for controlling the frame rate
clock = pygame.time.Clock()

# Square starting position
square_x = SCREEN_WIDTH // 2 - SQUARE_SIZE // 2
square_y = SCREEN_HEIGHT // 2 - SQUARE_SIZE // 2

# Game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Get keys pressed
    keys = pygame.key.get_pressed()

    # Update square position based on input
    if keys[pygame.K_w] or keys[pygame.K_UP]:  # Move up
        square_y -= SQUARE_SPEED
    if keys[pygame.K_s] or keys[pygame.K_DOWN]:  # Move down
        square_y += SQUARE_SPEED
    if keys[pygame.K_a] or keys[pygame.K_LEFT]:  # Move left
        square_x -= SQUARE_SPEED
    if keys[pygame.K_d] or keys[pygame.K_RIGHT]:  # Move right
        square_x += SQUARE_SPEED

    # Keep the square within the screen boundaries
    square_x = max(0, min(SCREEN_WIDTH - SQUARE_SIZE, square_x))
    square_y = max(0, min(SCREEN_HEIGHT - SQUARE_SIZE, square_y))

    # Clear screen
    screen.fill(WHITE)

    # Draw the square
    pygame.draw.rect(screen, SQUARE_COLOR, (square_x, square_y, SQUARE_SIZE, SQUARE_SIZE))

    # Update the display
    pygame.display.flip()

    # Limit frame rate to 60 FPS
    clock.tick(60)

# Quit pygame
pygame.quit()
