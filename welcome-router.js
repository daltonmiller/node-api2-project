const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "welcom to our api"
    })
})

module.exports = router