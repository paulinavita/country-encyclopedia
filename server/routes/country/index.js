const router = require("express").Router()
const CountriesController = require('../../controllers/CountriesController')

//ini bentuknya localhost:xxx/country
router.get("/", CountriesController.getCountries)

module.exports = router