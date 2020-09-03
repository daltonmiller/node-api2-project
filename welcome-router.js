const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        // message: `welcome ${process.env.COHORT}`,
        fact: process.env.FUN_FACT || "i have no fun facts"
    })
})

module.exports = router