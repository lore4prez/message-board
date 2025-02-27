const { Router } = require('express');
const router = Router();

router.get("/", (req, res, next) => {
    res.send("You are making a new post message");
});

module.exports = router;

