import React from 'react'
import House from './House'

const HouseList = (houses) => {
    const homes = houses.houses
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    homes.map(house => {
                        return(
                            <House key={house.id} house={house} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HouseList
