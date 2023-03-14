import React from "react"
import { Link } from "react-router-dom"

import img_black from "../../arrow-black.png"
import img_red from "../../arrow-red.png"

import s from "./Back_Forth.module.css"

export let Back_Forth = () => {
    return (
        <div className={s.links}>
            <Link className={s.link} to="/">
                <img className={s.img} src={img_black} alt={img_black} />
                <h2 className={s.black}>Back to home</h2>
            </Link>

            <Link className={s.link} to="/createDog">
                <img className={s.img} src={img_red} alt={img_red} />
                <h2 className={s.red}>Create Dog</h2>
            </Link>
        </div>
    )
}