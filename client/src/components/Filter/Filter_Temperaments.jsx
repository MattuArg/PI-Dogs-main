import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { filter_Temperaments } from "../../redux/actions";

import s from "./Filter.module.css"

export let Filter_Temperaments = ({ setCurrentPage }) => {

    let dispatch = useDispatch()

    let temperaments = useSelector(state => state.temperaments)

    let handleChange = (e) => {
        dispatch(filter_Temperaments(e.target.value))
        setCurrentPage(1)
    }

    return (
        <div className={s.div_filter}>
            <h3>Filter by Temperaments:</h3>

            <select value="" onChange={handleChange}>
                <option className={s.option}>Select</option>
                {
                    temperaments.length && temperaments.map((temp, i) => {
                        return (<option key={i}>{temp}</option>)
                    })
                }
            </select>
        </div>
    )
}
