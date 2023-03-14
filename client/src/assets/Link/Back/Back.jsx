import React from "react"
import { Link } from "react-router-dom"

import img_black from "../../arrow-black.png"
import s from "./Back.module.css"

export const Back = () => {
    return(
        <div className={s.div_link}>
            <Link className={s.link} to="/home">
                <img className={s.img} src={img_black} alt={img_black} />
                <h2 className={s.black}>Back to home</h2>
            </Link>
        </div>
    )
}