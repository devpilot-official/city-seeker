# city-selector
This package is used to generate a random city of a particular country

## Usage

### Node.js

    const cityselector = require('city-selector')

    const cityName = cityselector.any().city.name; // This returns a random city from anywhere in the world - Lagos
    const cityFromACountry = cityselector.country("Nigeria").city.name; // This returns a random city from the country specified - Lagos
    
### Extras
  
    const cityRegion = cityselector.any().city.region // This returns the region of the city in its country - West
    const countryName = cityselector.any().country; // This returns the name of the country the returned city is - Nigeria
    const countryRegion = cityselector.any().region // This returns the country region of the city - Africa
    const countryRegion = cityselector.any().subregion // This returns the country region of the city - Western Africa

    const cityRegion = cityselector.country('Nigeria').city.region // This returns the region of the city in its country - Western Region
    const countryName = cityselector.country('Nigeria).country; // This returns the name of the country the returned city is - Nigeria
    const countryRegion = cityselector.country('Nigeria').region // This returns the country region of the city - Africa
    const countryRegion = cityselector.country('Nigeria').subregion // This returns the country region of the city - Western Africa
    
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
