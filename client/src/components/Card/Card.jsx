import React from "react";
import { Link } from "react-router-dom"
import s from "./Card.module.css"

export const Card = ({ id, image, name, temperaments, weight }) => {
    return(

        <div className={s.card}>

            <Link to={`/dog/${id}`}>
                <h3 className={s.name}>{name}</h3>
            </Link>

            <img className={s.img} src={image} alt={image} />
            
            <h3 className={s.cont_weight}>Weighs between: </h3>
            <h3 className={s.weight}>{weight} kg</h3>

            <div>
            <h3 className={s.cont_temp}>Temperaments: </h3>
                {
                    typeof temperaments == "undefined" ?
                    <h3 className={s.temp}>This dog has no temperaments</h3> :
                    <h3 className={s.temp}>{temperaments}</h3>
                }
            </div>
        </div>
    )
}
