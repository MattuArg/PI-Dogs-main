import React from "react";
import { useDispatch } from "react-redux"

import { order_Alphabetically } from "../../redux/actions";

import s from "./Order.module.css"

export let Order_Alphabetically = ({ setCurrentPage }) => {

    let dispatch = useDispatch()

    let handleChange = (e) => {
        dispatch(order_Alphabetically(e.target.value))
        setCurrentPage(1)
    }

    return (
        <div className={s.div_order}>
            <h3>Filter Alphabetically:</h3>

            <select value="" onChange={handleChange}>
                <option className={s.option}>Select</option>
                <option value="Asc">Asc</option>
                <option value="Desc">Desc</option>

            </select>
        </div>
    )
}
