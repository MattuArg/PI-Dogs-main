import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDogDetails } from "../../redux/actions";

import s from "./Dog.module.css"

export const DogDetails = (params) => {

    let dispatch = useDispatch()

    let dogDetails = useSelector(state => state.dogDetails)

    useEffect(() => {
        dispatch(getDogDetails(params.match.params.id))
    },[])

    return(
        <div>
            {
            dogDetails.length ?
            <div className={s.details}>
                <h2>id: </h2>
                <h3>{dogDetails[0].id}</h3>

                <h2>name: </h2>
                <h1>{dogDetails[0].name}</h1>
            
                <img src={dogDetails[0].image} alt={dogDetails[0].image} />

                <h2>height: </h2>
                <p>{dogDetails[0].height}</p>
            
                <h2>weigth: </h2>
                <p>{dogDetails[0].weight}</p>
            
                <h2>life span: </h2>
                <p>{dogDetails[0].life_span}</p>
    
                <h2>temperaments: </h2>
                {
                    Array.isArray(dogDetails[0].temperaments) ?
                    dogDetails[0].temperaments.map((temp, i) => <p key={i}>{temp.name}</p>) : 
                    <p>{dogDetails[0].temperaments}</p>  
                }
            </div>
            :
            <p>loading...</p>
            }
        </div>
    )
}
