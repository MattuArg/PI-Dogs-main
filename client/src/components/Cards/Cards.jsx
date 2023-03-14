import React from "react";
import { Card } from "../Card/Card";

import { Loading } from "../Loading/Loading";

import { Error_404 } from "../Error/Error_404";
import s from "./Cards.module.css"

export const Cards = ({ dogs, errors }) => {
    return(
        <div className={s.cards}>
            { errors ? <Error_404/> :
            dogs.length ? dogs.map(dog => {
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
            <Loading/>
            }
        </div>
    )
}
