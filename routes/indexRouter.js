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

module.exports = router;