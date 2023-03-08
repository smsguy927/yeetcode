const countries = [
    {id: 0, name: 'Alexandria'},
    {id: 1, name: 'Barbary'},
    {id: 2, name: 'Charliana'},
    {id: 3, name: 'Dianopolis'},
    {id: 4, name: 'Ericston '},
    {id: 5, name: 'Flavia'},
]

const cities = [
    { id: 3, country_id: 1, name: 'Lasalle' },
    { id: 8, country_id: 3, name: 'Moscovy' },
    { id: 2, country_id: 2, name: 'Seale' },
    { id: 1, country_id: 5, name: 'Granton' },
    { id: 0, country_id: 4, name: 'Helena' },
    { id: 6, country_id: 0, name: 'Ivarstead' },
    { id: 5, country_id: 2, name: 'Janesport' },
    { id: 4, country_id: 5, name: 'Karlton' },
    { id: 7, country_id: 4, name: 'Narazon' },
    { id: 11, country_id: 3, name: 'Oceana' },
    { id: 9, country_id: 0, name: 'Pelekus' },
    { id: 10, country_id: 1, name: 'Roland' },
];

const populations = [
    { id: 11, city_id: 3, amount: 39600 },
    { id: 10, city_id: 8, amount: 119200 },
    { id: 9, city_id: 2, amount: 82400 },
    { id: 8, city_id: 11, amount: 78600 },
    { id: 7, city_id: 1, amount: 109200 },
    { id: 6, city_id: 0, amount: 90400 },
    { id: 5, city_id: 5, amount: 29600 },
    { id: 4, city_id: 4, amount: 129200 },
    { id: 3, city_id: 10, amount: 62400 },
    { id: 2, city_id: 7, amount: 49600 },
    { id: 1, city_id: 9, amount: 139200 },
    { id: 0, city_id: 6, amount: 92800 },
];

const largestCountry = (countries, cities, populations) => {
    const countryPopTotals =  {}
    const countryCities = {}

    for(let item of countries){
        countryPopTotals[item.id] = 0
    }
    for(let item of cities){
        countryCities[item['id']] = item['country_id']
    }

    for(let item of populations) {
        countryPopTotals[countryCities[item.city_id]] += item.amount
    }
    let countryId = '-1'
    let maxPopulation = 0
    for(let item in countryPopTotals) {
        if(countryPopTotals[item] > maxPopulation) {
            countryId = item
            maxPopulation = countryPopTotals[item]
        }
    }
    let country = countries.find(x => x.id == countryId).name

    return { name: country, population: maxPopulation };
}
console.log(largestCountry(countries, cities, populations))