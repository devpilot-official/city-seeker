const faker = require('./index')
const assert = require('assert')

it('should return true', () => {
    const data = faker.any()
    assert.deepStrictEqual(data, { city: { name: data.city.name, anc_name: data.city.anc_name, region:  data.city.region}, country: data.country, region:  data.region, subregion: data.subregion})
})

it('should return true', () => {
    const data = faker.country("Afghanistan")
    assert.deepStrictEqual(data, { city: { name: data.city.name, anc_name: data.city.anc_name, region:  data.city.region}, country: data.country, region:  data.region, subregion: data.subregion})
})