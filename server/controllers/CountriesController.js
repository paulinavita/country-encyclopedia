const countries = require('../helpers/axios').countries
const pixabay = require('../helpers/axios').pixabay
const wiki = require('../helpers/axios').wiki

class CountriesController {

    static getCountries (req, res) {
        countries.get('/all')
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({err : err.message})
        })
    }

}

module.exports = CountriesController