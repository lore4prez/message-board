const { Router } = require('express');
const router = Router();

router.get("/", (req, res, next) => {
    res.send("You are in the index home page");
});

module.exports = router;