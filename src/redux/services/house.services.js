let url = `https://data.cityofchicago.org/resource/ydr8-5enu.json`

async function getHouses() {
    const response = await fetch(`${url}?$limit=10&$offset=990`)
    const data = response.json()
    return data
}

async function getSingleHouse (id) {
    const response = await fetch(`${url}?id=${id}`)
    const data = response.json()
    return data
}

export const houseServices = {
    getHouses,
    getSingleHouse
}
