// Import dependencies
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");

//variables
var valido;

// Setup the express server router
const router = express.Router();

// On post
router.post("/", async (req, res) => {

    // Dummy data
    const apps = [{ app: "AppName", guid: "You need to get this value from the getPassword file. (or can implement a function that return that value but bruh, i've made this by the easiest method.)"/*, roles: ["admin", "editor", "viewer"] */ }];

    // Get to user from the database, if the user is not there return error
    let app = apps.find(a => a.app === req.body.app);
    if (!app) {
        res.send({ ok: false, error: "Invalid app" });
        return;
    }

    // Compare the password with the password in the database
    const valid = await bcrypt.compare(req.body.guid, app.guid)

    if (!valid) {
        res.send({ ok: false, error: "Invalid credentials" });
        return;
    }


    //  if (!valid) throw res.send({ ok: false, error: "Invalid guid." }); (this crashes the API because it's an error.)

    const token = jwt.sign({
        id: app._id,
        /*roles: user.roles,*/
    }, "jwtPrivateKey", { expiresIn: "15m" });

    res.send({
        ok: true,
        token: token
    });
});

router.get("/", async (req, res) => {
    res.send({
        ok: true,
        result: "LMAOOO, MAKE A POST REQUEST KEKW"
    });
});

// Export the router
module.exports = router;