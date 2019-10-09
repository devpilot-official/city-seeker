# city-faker
This package is used to generate a random city of a particular country

## Usage

### Node.js

    const city-faker = require('city-faker')

    const cityName = city-faker.any().city.name; // This returns a random city from anywhere in the world - Lagos
    const cityFromACountry = city-faker.country("Nigeria").city.name; // This returns a random city from the country specified - Lagos
    
### Extras
  
    const cityRegion = city-faker.any().city.region // This returns the region of the city in its country - West
    const countryName = city-faker.any().country; // This returns the name of the country the returned city is - Nigeria
    const countryRegion = city-faker.any().region // This returns the country region of the city - Africa
    const countryRegion = city-faker.any().subregion // This returns the country region of the city - Western Africa

    const cityRegion = city-faker.country('Nigeria').city.region // This returns the region of the city in its country - Western Region
    const countryName = city-faker.country('Nigeria).country; // This returns the name of the country the returned city is - Nigeria
    const countryRegion = city-faker.country('Nigeria').region // This returns the country region of the city - Africa
    const countryRegion = city-faker.country('Nigeria').subregion // This returns the country region of the city - Western Africa
    
## Available Countries

    These are the countries currently available...
    
    Afghanistan
    Aaland
    Albania
    Algeria
    American Samoa
    Andorra
    Angola
    Anguilla
    Antigua and Barbuda
    Argentina
