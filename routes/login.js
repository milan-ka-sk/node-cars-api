var express = require('express');
var router = express.Router();

//
// post - check login
//

var validUser = {
    username: "admin",
    password: "pass"
}

router.post('/', function(req, res) {

    var loginToEvaluate = req.body;

    if (loginToEvaluate.username === validUser.username && loginToEvaluate.password === validUser.password) {
        res.json("ok");
    } else {
        res.json("wrong");
    }
});

module.exports = router;