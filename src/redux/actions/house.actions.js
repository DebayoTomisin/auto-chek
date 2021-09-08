import * as t from "../types/house.types"

import { houseServices } from "../services/house.services";

function getAllHouses () {
    return async dispatch => {
        const houses = await houseServices.getHouses()
        dispatch({ type: t.GET_ALL_HOUSES, payload: houses })
        return houses
    }
}

export const houseActions = {
    getAllHouses
}
