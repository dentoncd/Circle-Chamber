# Circle Chamber

Circle Chamber is a simple HTML5 Canvas project that creates colorful bouncing balls inside a browser window. The user can add or remove balls in different amounts while each ball moves independently and bounces off the edges of the canvas.

## Features

* Randomly generated ball colors
* Random ball sizes
* Random movement speeds
* Balls bounce off all four sides of the canvas
* Add:

  * 1 ball
  * 5 balls
  * 10 balls
  * 100 balls
* Remove:

  * 1 ball
  * 5 balls
  * 10 balls
  * All balls
* Experimental **DO NOT CLICK** button that attempts to continuously generate balls

## Controls

### Add Balls

| Button         | Action                                       |
| -------------- | -------------------------------------------- |
| `+1`           | Adds one ball                                |
| `+5`           | Adds five balls                              |
| `+10`          | Adds ten balls                               |
| `+100`         | Adds one hundred balls                       |
| `DO NOT CLICK` | Attempts to add an unlimited number of balls |

### Remove Balls

| Button  | Action                             |
| ------- | ---------------------------------- |
| `-1`    | Removes one ball                   |
| `-5`    | Removes five balls                 |
| `-10`   | Removes ten balls                  |
| `Clear` | Removes every ball from the canvas |

## How It Works

Each ball is represented as a JavaScript object containing:

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

When a ball is created, its radius, position, movement speed, and color are randomly generated.

The program repeatedly redraws the canvas and updates each ball's position. When a ball reaches an edge of the canvas, its movement direction is reversed, causing it to bounce.

## Technologies Used

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

Contains the page layout, canvas element, styling, and controls for adding and removing balls.

### `canvas.js`

Contains the JavaScript responsible for:

* Creating balls
* Drawing balls to the canvas
* Generating random colors
* Updating ball positions
* Detecting canvas boundaries
* Handling button events
* Adding and removing balls

## Running the Project

Clone the repository:

```bash
git clone https://github.com/dentoncd/Circle-Chamber.git
```

Navigate into the project:

```bash
cd Circle-Chamber
```

Then open `canvas.html` in a browser.

Because the page loads the JavaScript file from:

```html
<script src="/scripts/canvas.js"></script>
```

the project may work more reliably when run through a local web server instead of opening the HTML file directly.

For example, using JetBrains' built-in browser/server functionality, open `canvas.html` and select **Open in Browser**.

## Future Ideas

Some possible additions already noted in the project include:

* Static objects that balls can collide with
* Ball-to-ball collision
* Floating power-ups
* Double or triple ball power-ups
* Freeze effects
* Speed boosts
* Heavy or slow ball effects

## Warning

The **DO NOT CLICK** button contains a loop that attempts to run indefinitely:

```javascript
for (let i = 0; i < Infinity; ++i)
```

Clicking it can cause the browser tab to freeze or become unresponsive.

## Purpose

This project was created as a JavaScript and HTML Canvas exercise to practice animation, arrays, objects, event listeners, random values, and basic collision detection.
