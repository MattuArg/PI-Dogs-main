import React from "react";
import { useDispatch } from "react-redux";

import { order_Weight } from "../../redux/actions";

import s from "./Order.module.css"

export let Order_Weight = ({ setCurrentPage }) => {

    let dispatch = useDispatch()

    let handleChange = (e) => {
        dispatch(order_Weight(e.target.value))
        setCurrentPage(1)
    }

    return (
        <div className={s.div_order}>
            <h3>Order by Weight:</h3>

            <select value="" onChange={handleChange}>
                <option className={s.option}>Select</option>
                <option value="Min">Min. Weight</option>
                <option value="Max">Max. Weight</option>
            </select>
        </div>
    )
}
