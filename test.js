const cityselector = require('./index')
const assert = require('assert')

it('should return true', () => {
    const data = cityselector.any()
    assert.deepStrictEqual(data, { city: { name: data.city.name, anc_name: data.city.anc_name, region:  data.city.region}, country: data.country, region:  data.region, subregion: data.subregion})
})

it('should return true', () => {
    const data = cityselector.country("Afghanistan")
    assert.deepStrictEqual(data, { city: { name: data.city.name, anc_name: data.city.anc_name, region:  data.city.region}, country: data.country, region:  data.region, subregion: data.subregion})
})