import React from 'react'
import {Link} from "react-router-dom"
import defaultImg from "../images/bcgHouse2.jpg"

const House = (house) =>
{
    const {id, street_name, street_number, suffix, building_fee_paid, building_fee_unpaid, building_fee_waived, ...rest } = house.house || []
    let total_building_fee = Number(building_fee_paid + building_fee_unpaid + building_fee_waived)
    return(
        <article className="room">
            <div className="img-container">
                <img src={defaultImg} alt="single house" />
                <div className="price-top">
                    <h6>{`$${total_building_fee}`}</h6>
                    <p>total building fees</p>
                </div>
                <Link to={`/house/${id}`} className="btn-primary room-link">Know More</Link>
            </div>
            <p className="room-info">{`${street_number}, ${street_name} ${suffix}`}</p>
        </article>
    )
}

export default House
