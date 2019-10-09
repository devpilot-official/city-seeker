const country = require("./data/cities")

const allCountries = () => {

    // This is used to get the total number of countries
    const all_countries = country.countries.length
    
    // This is used to pick a country at random from all the available countries
    const pick_country = Math.floor(Math.random() * (all_countries - 0 + 0) + 0)
    
    // The random country data is retrieved here
    const country_data = country.country(pick_country)

    // The total number of cities available in that country is retrieved here
    const all_cities = country_data.country.cities.length
    
    //  City is picked from the country
    const pick_city = Math.floor(Math.random() * (all_cities - 0 + 0) + 0)

    // The random city data is stored here
    const city_data = country_data.country.cities[pick_city]

    // Return a JSON response
    return {
        city: city_data,
        country: country_data.country.name,
        region: country_data.country.region,
        subregion: country_data.country.subregion
    }
}

module.exports = allCountries