let url = `https://data.cityofchicago.org/resource/ydr8-5enu.json?$limit=10&$offset=990`

async function getHouses() {
    const response = await fetch(url)
    const data = response.json()
    return data
}

export const houseServices = {
    getHouses
}