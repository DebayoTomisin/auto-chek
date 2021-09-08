import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { houseActions } from '../redux/actions/house.actions'
import defualtImg from "../images/pexels-lilartsy-5130204.jpg"

const SingleHouse = (props) =>
{
    const params = useParams()
    const dispatch = useDispatch()
    let { id } = params

    useEffect(() => {
        dispatch(houseActions.getSingleHouse(id))
    }, [])

    const houseState = useSelector(state => state.singleHouse.house) || []
    return(
        <div>
            {
                houseState.map(house => {
                    const {id, street_name, street_number, suffix, building_fee_paid, building_fee_unpaid, building_fee_waived, work_description,reported_cost, permit_type,permit_, ...rest } = house || []
                    console.log(house)
                    let total_building_fee = Number(building_fee_paid + building_fee_unpaid + building_fee_waived)

                    return(
                        <section className="single-room">
                            <div className="single-room-images">
                                <img src={defualtImg} alt='default' />
                            </div>

                            <div className="single-room-info">
                                <article className="desc">
                                    <h3>{`${street_number}, ${street_name} ${suffix}`}</h3>
                                    <p>Work Description: {work_description}</p>
                                </article>
                                <article className="info">
                                    <h3>Info</h3>
                                    <h6>Building fees: ${total_building_fee}</h6>
                                    <h6> permit: {permit_, permit_type} SQFT</h6>
                                    <h6>reported cost: ${reported_cost}</h6>
                                </article>
                            </div>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default SingleHouse
