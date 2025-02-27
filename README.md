# message-board
A personal project to practice Node.js and express. This is a mini message board that will allow you to add a post message and show all of the messages

# Setup
1. npm init -y
2. npm install express ejs
3. create .env
4. "start": "node app",
    "dev": "node --watch --env-file=.env app"
5. folders: 
    - public
    - views
    - routes
    - controllers
    - middleware
6. // In app.js/server.js where entry point is

    const express = require('express');
    const app = express();
    const port = process.env.PORT || 8000;
    const path = require('node:path');

    // Body parser middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Set up static folder 
    app.use(express.static (path.join(__dirname, 'public')));

    // EJS
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    // Routes
    app.get("/", (req, res, next) => {
        res.send("Hi Im checking if server is working first");
    });

    // Error Handler
    app.use((req, res, next) => {
        const error = new Error('Not Found');
        error.status = 404;
        next(error);
    });
    app.use((err, req, res, next) => {
        if (err.status) {
            res.status(err.status).json({ msg: err.message });
        } else {
            res.status(500).json({ msg: err.message });
        }
    });

    // Port listen
    app.listen(port, () => console.log(`Server is running on port ${port}`));