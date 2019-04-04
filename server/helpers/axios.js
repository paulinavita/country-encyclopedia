const axios = require('axios');

module.exports = {
    countries: axios.create({
        baseURL: 'https://restcountries.eu/rest/v2'
    }),
    pixabay: axios.create({
        baseURL : 'https://pixabay.com/api/'
    }),
    wiki : axios.create({
        baseURL :`https://en.wikipedia.org/w/api.php`
    })
    // ,
    // wiki: axios.create({
    //     baseURL:'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${searching}`'
    // })
}