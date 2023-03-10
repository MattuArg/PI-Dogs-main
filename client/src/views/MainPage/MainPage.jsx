import React from "react";
import { Link } from "react-router-dom"
import s from "./MainPage.module.css"

export const MainPage = () => {
return(
        <div className={s.container}>
            <h1> WELCOME TO API DOGS </h1>

            <Link to="/home">
                <button className={s.btn}>
                    Dogs
                </button>
            </Link>
        </div>
    )
}
