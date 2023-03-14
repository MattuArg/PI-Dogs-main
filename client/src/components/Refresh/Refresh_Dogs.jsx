import React from "react";
import { useDispatch } from "react-redux"

import { refresh_Dogs } from "../../redux/actions";

import s from "./Refresh_Dogs.module.css"

export let Refresh_Dogs = ({ setCurrentPage }) => {
    
    let dispatch = useDispatch()

    let handleClick = () => {
        dispatch(refresh_Dogs())
        setCurrentPage(1)
    }

    return (
        <div>
            <button className={s.btn_refresh} onClick={handleClick}>
                Refresh Dogs
            </button>
        </div>
    )
}
