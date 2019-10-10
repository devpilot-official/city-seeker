# city-seeker
This package is used to generate a random city of a particular country

## Usage

### Node.js

    const cityseeker = require('city-seeker')

    const cityName = cityseeker.any().city.name; // This returns a random city from anywhere in the world - Lagos
    const cityFromACountry = cityseeker.country("Nigeria").city.name; // This returns a random city from the country specified - Lagos
    
### Extras
  
    const cityRegion = cityseeker.any().city.region // This returns the region of the city in its country - West
    const countryName = cityseeker.any().country; // This returns the name of the country the returned city is - Nigeria
    const countryRegion = cityseeker.any().region // This returns the country region of the city - Africa
    const countryRegion = cityseeker.any().subregion // This returns the country region of the city - Western Africa

    const cityRegion = cityseeker.country('Nigeria').city.region // This returns the region of the city in its country - Western Region
    const countryName = cityseeker.country('Nigeria).country; // This returns the name of the country the returned city is - Nigeria
    const countryRegion = cityseeker.country('Nigeria').region // This returns the country region of the city - Africa
    const countryRegion = cityseeker.country('Nigeria').subregion // This returns the country region of the city - Western Africa
    
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
