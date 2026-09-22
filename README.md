# Circle Chamber

Circle Chamber is an interactive browser-based animation built with JavaScript and the HTML5 Canvas API. The project simulates colorful bouncing balls with randomized properties and allows users to dynamically add or remove balls from the canvas.

The project focuses on animation, object-based programming, event handling, and basic collision detection in JavaScript.

## Features

* Animated bouncing balls
* Randomized ball colors
* Randomized sizes and movement speeds
* Boundary collision detection
* Dynamic creation and removal of balls
* Multiple controls for adding and removing different numbers of balls
* Continuous canvas animation using JavaScript

## Controls

| Control        | Action                           |
| -------------- | -------------------------------- |
| `+1`           | Add 1 ball                       |
| `+5`           | Add 5 balls                      |
| `+10`          | Add 10 balls                     |
| `+100`         | Add 100 balls                    |
| `-1`           | Remove 1 ball                    |
| `-5`           | Remove 5 balls                   |
| `-10`          | Remove 10 balls                  |
| `Clear`        | Remove all balls                 |
| `DO NOT CLICK` | Experimental stress-test feature |

## How It Works

Each ball is stored as an object containing information about its size, position, velocity, and color.

```javascript
{
    radius: ...,
    x: ...,
    y: ...,
    dx: ...,
    dy: ...,
    color: ...
}
```

When a ball is created, its properties are randomly generated.

The animation loop continuously:

1. Clears the canvas
2. Draws each ball
3. Updates each ball's position
4. Checks for collisions with the canvas boundaries
5. Reverses the appropriate velocity when a collision occurs

This creates the effect of balls continuously bouncing around the chamber.

## Technologies

* HTML
* CSS
* JavaScript
* HTML5 Canvas API

## Project Structure

```text
Circle-Chamber/
│
├── canvas.html
└── scripts/
    └── canvas.js
```

### `canvas.html`

Defines the user interface, canvas, styling, and controls.

### `canvas.js`

Handles the core application logic, including:

* Ball creation
* Canvas rendering
* Animation
* Random color generation
* Position updates
* Boundary collision detection
* Button event handling
* Adding and removing balls

## Running the Project

Clone the repository:

```bash
git clone https://github.com/dentoncd/Circle-Chamber.git
```

Navigate into the repository:

```bash
cd Circle-Chamber
```

Open `canvas.html` using a browser or a local development server.

If you are using a JetBrains IDE, you can right-click `canvas.html` and select **Open in Browser**.

## Concepts Practiced

This project provided practice with:

* JavaScript objects and arrays
* DOM event listeners
* HTML Canvas rendering
* Animation loops
* Random value generation
* Velocity and movement
* Collision detection
* Dynamic user interaction

## Future Improvements

Possible additions include:

* Ball-to-ball collision detection
* Obstacles inside the chamber
* Interactive power-ups
* Speed boosts
* Freeze effects
* Different ball physics
* User-controlled ball properties
* Improved responsive canvas sizing
* Performance improvements for large numbers of balls

## Experimental Feature

The **DO NOT CLICK** button is intentionally designed as an experimental stress-test feature that attempts to generate an extremely large number of balls.

Depending on the browser and computer, using this feature may cause the page to become slow or unresponsive.

## About

Circle Chamber was created to explore browser-based animation and interactive graphics using JavaScript and the HTML5 Canvas API.
