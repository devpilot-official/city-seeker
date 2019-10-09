# city-selector
This package is used to generate a random city of a particular country

## Usage

### Node.js

    const city-selector = require('city-selector')

    const cityName = city-selector.any().city.name; // This returns a random city from anywhere in the world - Lagos
    const cityFromACountry = city-selector.country("Nigeria").city.name; // This returns a random city from the country specified - Lagos
    
### Extras
  
    const cityRegion = city-selector.any().city.region // This returns the region of the city in its country - West
    const countryName = city-selector.any().country; // This returns the name of the country the returned city is - Nigeria
    const countryRegion = city-selector.any().region // This returns the country region of the city - Africa
    const countryRegion = city-selector.any().subregion // This returns the country region of the city - Western Africa

    const cityRegion = city-selector.country('Nigeria').city.region // This returns the region of the city in its country - Western Region
    const countryName = city-selector.country('Nigeria).country; // This returns the name of the country the returned city is - Nigeria
    const countryRegion = city-selector.country('Nigeria').region // This returns the country region of the city - Africa
    const countryRegion = city-selector.country('Nigeria').subregion // This returns the country region of the city - Western Africa
    
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
