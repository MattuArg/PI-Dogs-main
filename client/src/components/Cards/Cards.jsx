import React from "react";
import { Card } from "../Card/Card";
import s from "./Cards.module.css"

export const Cards = ({ dogs }) => {
    return(
        <div className={s.cards}>
            {dogs.length ? dogs.map(dog => {
                return (
                    <Card
                    key={dog.id}
                    id={dog.id}
                    name={dog.name}
                    image={dog.image}
                    weight={dog.weight}
                    temperaments={dog.temperaments}/>
                )
            }) : 
            <h1>Loading...</h1>
            }
        </div>
    )
}
