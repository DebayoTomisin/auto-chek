import * as t from "../types/house.types"

import { houseServices } from "../services/house.services";

function getAllHouses () {
    return async dispatch => {
        const houses = await houseServices.getHouses()
        dispatch({ type: t.GET_ALL_HOUSES, payload: houses })
        return houses
    }
}

function getSingleHouse (id) {
    return async dispatch => {
        const house = await houseServices.getSingleHouse(id)
        dispatch({ type: t.GET_SINGLE_HOUSE, payload: house })
        return house
    }
}

export const houseActions = {
    getAllHouses,
    getSingleHouse
}
