const byCountry = require("./data/countries")


const country = (name) => {

    const search = name;

    let data = byCountry.filter((obj) =>{
        return Object.values(obj).some((val) => {
           return val.name.toLowerCase().includes(search.toLowerCase())
        })
     })

    if(data.length < 1){
        // console.log(res.length)
        data = [{country: {name: "Not available", cities: [{name: "Not available"}], region: "Not avaliable", subregion: "Not available"}}]
    }
    
    // The total number of cities available in that country is retrieved here
    const all_cities = data[0].country.cities.length
    

    //  City is picked from the country
    const pick_city = Math.floor(Math.random() * (all_cities - 0 + 0) + 0)

    // The random city data is stored here
    const city_data = data[0].country.cities[pick_city]

    return {
        city: city_data,
        country: data[0].country.name,
        region: data[0].country.region,
        subregion: data[0].country.subregion
    }
}

module.exports = country