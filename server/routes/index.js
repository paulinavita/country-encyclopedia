const router = require("express").Router()
const CountryRoutes = require('./country')
const UserController = require('../controllers/UserController')

router.get("/", UserController)
router.use("/countries", CountryRoutes)

module.exports = router