const { Router } = require('express');
const router = Router();

router.get("/", (req, res, next) => {
    res.render("form", {title: "Create A New Post"});
});

module.exports = router;

