const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const newMsgRouter = require('./routes/newMsgRouter');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up static folder 
app.use(express.static (path.join(__dirname, 'public')));

// EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/new", newMsgRouter);
app.use("/", indexRouter);

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