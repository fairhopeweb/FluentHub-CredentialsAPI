// Import dependencies
const express = require("express");

// Import middlewares
const auth = require("../middleware/auth");
//const { admin, editor, viewer } = require("../middleware/roles");

let messages = [{
    "credentials": [
        {
            "id": {
                "value": "YOUR clientID"
            },
            "secret": {
                "value": "YOUR clientSecret"
            }
        }
    ]
}];
/*[{ id: 1, name: "clientId", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium nec ipsum nec elementum."}, {id: 2, name: "clientSecret", content: "HAHA LOOL SECRET" }]*/

// Setup the router for express
const router = express.Router();
// *************************
// Set up the route handlers
// *************************
router.get("/", [auth/*, viewer*/], (req, res) => {
    res.send({
        ok: true,
        result: messages
    });
});

router.post("/", [auth/*, editor*/], async (req, res) => {
    // Make a new message and add it
    // messages.push({ id: messages.length + 1, name: req.body.name, content: req.body.content });

    // Send response
    res.status(200).send({
        ok: true,
        result: "bruh, better dont touch this, caution"
    });
});

router.put("/", [auth/*, editor*/], async (req, res) => {
    // Update the message
    // Code not implemented
    // Send response
    res.status(200).send({
        ok: true,
        result: messages
    });
});

router.delete("/", [auth/*, admin*/], async (req, res) => {
    // Delete the message
    messages = messages.filter((message) => { message.id !== req.body.id });

    // Send response
    res.status(200).send({
        ok: true,
        result: messages
    });
});

// Export the router
module.exports = router;