import * as t from "../types/house.types"
import { combineReducers } from "redux"

const houseState = {
    houses: [],
    house: []
}

const getAllHouses = (state = houseState.houses, {  type, payload }) =>
{
    if( type === t.GET_ALL_HOUSES) {
        return {
            ...state,
            houses: payload
        }
    } else{
        return state
    }
}

export default combineReducers({
    houses: getAllHouses
})