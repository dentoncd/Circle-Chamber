// Cashawn Denton
// Week 14 Homework

window.addEventListener("load", function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let balls = [];
    let staticObjects = [];

    function drawBall(ball) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();
    }

    // Draw a random object
    // function drawObj(obj) {
    //     ctx.beginPath();
    //     ctx.rect(200, 200, 40, 20);
    //     ctx.fillStyle = obj.color;
    //     ctx.fill();
    //     ctx.closePath();
    // }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        balls.forEach(function(ball) {
        drawBall(ball);
             // y direction move
             if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
                ball.dy = -ball.dy;
            }
            
            ball.y += ball.dy;

            // x direction move
            if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
                ball.dx = -ball.dx;
            }
            ball.x += ball.dx;
            
            // make sure balls stay in the canvas
            if (ball.y - ball.radius < 0) {
                ball.y = ball.radius;
            } else if (ball.y + ball.radius > canvas.height) {
                ball.y = canvas.height - ball.radius;
            }
            else if (ball.y + ball.radius > ball.y + ball.radius) {
                ball.y = ball.radius - ball.radius;
            }
    
            if (ball.x - ball.radius < 0) {
                ball.x = ball.radius;
            } else if (ball.x + ball.radius > canvas.width) {
                ball.x = canvas.width - ball.radius;
            }

        });
    }

    setInterval(draw, 10);

// Function to generate a random color
    function getRandomColor() {
            let letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; ++i) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

// Add a new ball when the button is clicked
    let addBallButton = document.getElementById("addBall");
    addBallButton.addEventListener("click", function() {
        let newBall = {
            radius: Math.random() * 10 + 10,
            x: Math.random() * canvas.width + 10,
            y: Math.random() * canvas.height + 10,
            dx: Math.random() * 20 - 2, // Speed of x
            dy: Math.random() * 20 - 2, // Speed of y
            color: getRandomColor()
        };
        balls.push(newBall);
    });

 // Remove the last ball when the button is clicked
    let removeBallButton = document.getElementById("removeBall");
    removeBallButton.addEventListener("click", function() {
        if (balls.length > 0) {
            balls.shift();
        }
    });

// Remove the last 5 balls when the button is clicked
    let removeFiveBallsButton = document.getElementById("removeFiveBalls");
    removeFiveBallsButton.addEventListener("click", function() {
        if (balls.length > 0) {
            for (let i = 0; i < 5; ++i) {
                balls.shift();
            }
        }
    });

// Remove the last 10 balls when the button is clicked
    let removeTenBallsButton = document.getElementById("removeTenBalls");
    removeTenBallsButton.addEventListener("click", function() {
        if (balls.length > 0) {
            for (let i = 0; i < 10; ++i) {
                balls.shift();
            }
        }
    });

// Add five new balls when the button is clicked
    let addFiveBallsButton = document.getElementById("addFiveBalls");
    addFiveBallsButton.addEventListener("click", function() {
        for (let i = 0; i < 5; ++i) {
            let newBall = {
                radius: Math.random() * 10 + 10,
                x: Math.random() * canvas.width + 10,
                y: Math.random() * canvas.height + 10,
                dx: Math.random() * 10 - 2,
                dy: Math.random() * 10 - 2, 
                color: getRandomColor()
            };
            balls.push(newBall);
        }
    });

// Add ten new balls when the button is clicked
    let addTenBallsButton = document.getElementById("addTenBalls");
    addTenBallsButton.addEventListener("click", function() {
        for (let i = 0; i < 10; ++i) {
            let newBall = {
                radius: Math.random() * 10 + 10,
                x: Math.random() * canvas.width + 10,
                y: Math.random() * canvas.height + 10,
                dx: Math.random() * 10 - 2,
                dy: Math.random() * 10 - 2, 
                color: getRandomColor()
            };
            balls.push(newBall);
        }
    });

// Add one hundred new balls when the button is clicked
    let addHundredBallsButton = document.getElementById("addHundredBalls");
    addHundredBallsButton.addEventListener("click", function() {
        for (let i = 0; i < 100; ++i) {
            let newBall = {
                radius: Math.random() * 10 + 10,
                x: Math.random() * canvas.width + 10,
                y: Math.random() * canvas.height + 10,
                dx: Math.random() * 10 - 2,
                dy: Math.random() * 10 - 2, 
                color: getRandomColor()
            };
            balls.push(newBall);
        }
    });

// Add ??? new balls when the button is clicked
    let breakInfinityButton = document.getElementById("breakInfinity");
    breakInfinityButton.addEventListener("click", function() {
        for (let i = 0; i < Infinity; ++i) {
            let newBall = {
                radius: Math.random() * 10 + 10,
                x: Math.random() * canvas.width + 10,
                y: Math.random() * canvas.height + 10,
                dx: Math.random() * 10 - 2,
                dy: Math.random() * 10 - 2, 
                color: getRandomColor()
            };
            balls.push(newBall);
        }
    });

// Remove all balls when the button is clicked
    let removeAllBallsButton = document.getElementById("removeAll");
    removeAllBallsButton.addEventListener("click", function() {
        balls = [];
    });

// TODO: Have static objects that the balls can interact with

// TODO: Have floating power-ups that the balls can interact with, ex: double or triple balls, freezy balls, speedy balls, heavy, slow

// TODO: Give ball-collision with other balls
});