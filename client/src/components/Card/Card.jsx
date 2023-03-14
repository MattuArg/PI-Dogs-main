import React from "react";
import { Link } from "react-router-dom"
import s from "./Card.module.css"

export const Card = ({ id, image, name, temperaments, weight }) => {
    return(

        <div className={s.card}>

            <Link to={`/dog/${id}`}>
                <h2>{name}</h2>
            </Link>

            <img className={s.img} src={image} alt={image} />
            <p>Weighs between: {weight} kg</p>

            <div>
            temperaments:
                {
                typeof temperaments == "undefined" ?
                <h4>This dog has no temperaments</h4> :
                <h4>{temperaments}</h4>
                }
            </div>
        </div>
    )
}
