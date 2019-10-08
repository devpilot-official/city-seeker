const countries = require("./countries")

const country = (id) => {

    // This returns the random country that the ID depicts with all the cities available in that country
    return countries[id]
}

module.exports = {countries, country}