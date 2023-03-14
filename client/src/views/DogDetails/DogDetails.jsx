import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { empty_Array, getDogDetails } from "../../redux/actions";
import { Loading } from "../../components/Loading/Loading";

import { Back } from "../../assets/Link/Back/Back";
import s from "./Dog.module.css"

export const DogDetails = (params) => {

    let dispatch = useDispatch()

    let dogDetails = useSelector(state => state.dogDetails)

    useEffect(() => {
        dispatch(getDogDetails(params.match.params.id))
        dispatch(empty_Array("For_DogDetails"))
    },[])

    return(
        <div className={s.container}>

            <Back/>

            {
            dogDetails.length ?
            <div className={s.div_details}>

                <div className={s.id}>
                    <h2>id:</h2>
                    <h3>{dogDetails[0].id}</h3>
                </div>

                <h1>{dogDetails[0].name}</h1>
            
                <img src={dogDetails[0].image} alt={dogDetails[0].image} />

                <div className={s.height_weight}>
                    <h2>height: </h2>
                    <h3>{dogDetails[0].height}</h3>
  
                    <h2>weigth: </h2>
                    <h3>{dogDetails[0].weight}</h3>

                    <h2>life span: </h2>
                    <h3>{dogDetails[0].life_span}</h3>
                </div>
            
    
                <h2>temperaments: </h2>
                <div className={s.temperaments}>
                    {
                        <h3>{dogDetails[0].temperaments}</h3>  
                    }
                </div>
            </div>
            :
            <Loading/>
            }
        </div>
    )
}
