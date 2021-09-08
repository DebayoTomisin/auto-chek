import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { houseActions } from "../redux/actions/house.actions";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Home = (props) =>
{
    const dispatch = useDispatch()
    const eventState = useSelector(state => state.houses)

    useEffect(() => {
        dispatch(houseActions.getAllHouses())
    }, [])
    
    console.log(eventState.houses)

    return(
        <>
           <Hero>
            <Banner title="Homes in the suberbs of Chicago" subtitle="Brought to you by AutoChek-Housing"> </Banner>
           </Hero>
        </>
    )
}

export default Home
