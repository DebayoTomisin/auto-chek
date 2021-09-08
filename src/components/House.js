import React from 'react'
import {Link} from "react-router-dom"
import defaultImg from "../images/bcgHouse.jpg"

const House = (house) =>
{
    const id = Math.random() * 10000
    return(
        <article className="room">
            <div className="img-container">
                <img src={defaultImg} alt="single house" />
                <div className="price-top">
                    <h6>$5000</h6>
                    <p>per Annum</p>
                </div>
                <Link to={`/house/${id}`} className="btn-primary room-link">Know More</Link>
            </div>
            <p className="room-info">New House</p>
        </article>
    )
}

export default House
