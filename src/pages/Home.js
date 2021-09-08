import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { houseActions } from "../redux/actions/house.actions";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";

const Home = (props) =>
{
    const dispatch = useDispatch()
    const houseState = useSelector(state => state.houses.houses) || []

    useEffect(() => {
        dispatch(houseActions.getAllHouses())
    }, [])

    return(
        <>
           <Hero>
            <Banner title="Homes in the suberbs of Chicago" subtitle="Brought to you by AutoChek-Housing"> </Banner>
           </Hero>
           <HouseList houses={houseState} />
        </>
    )
}

export default Home
