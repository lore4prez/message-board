const { Router } = require('express');
const router = Router();

// Sample messages
const messages = [
    {
        text: "Hi there!",
        user: "Amando", 
        added: new Date()
    },
    {
        text: "I am Charles!",
        user: "Charles", 
        added: new Date()
    },
];

router.get("/", (req, res, next) => {
    res.render("index", {title: "Mini Messageboard", msg: messages});
});


// @desc    Create a post message
// @route   POST /new
router.post("/new", (req, res, next) => {
    const newPost = {
        user: req.body.author,
        text: req.body.message, 
        added: new Date(),
    };

    messages.push(newPost);

    res.redirect("/");
    res.status(201).json(newPost);
});

module.exports = router;