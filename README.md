# city-faker
This package is used to generate a random city of a particular country

## Usage

### Node.js

    const city-faker = require('city-faker');

    const cityName = city-faker().city.name; // This returns a random city from anywhere in the world - Lagos
    const cityFromACountry = city-faker("Nigeria").city.name; // This returns a random city from the country specified - Lagos
    
### Extras
  
    const cityRegion = city-faker().city.region // This returns the region of the city in its country - West
    const countryName = city-faker().country; // This returns the name of the country the returned city is - Nigeria
    const countryRegion = city-faker().region // This returns the country region of the city - Africa
    const countryRegion = city-faker().region // This returns the country region of the city - Western Africa
    
## Available Countries
    
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
