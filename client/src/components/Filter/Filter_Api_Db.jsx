import React from "react";
import { useDispatch } from "react-redux"

import { filter_Api_Db } from "../../redux/actions";

import s from "./Filter.module.css"

export let Filter_Api_Db = ({ setCurrentPage }) => {

    let dispatch = useDispatch()

    let handleChange = (e) => {
        dispatch(filter_Api_Db(e.target.value))
        setCurrentPage(1)
    }

    return (
        <div className={s.div_filter}>
            <h3>Filter by Created/Existing:</h3>

            <select value="" onChange={handleChange}>
                <option className={s.option}>Select</option>
                <option value="Api">Existing Dogs</option>
                <option value="Db">Your Created</option>

            </select>

        </div>
    )
}

