import React from "react";
import { Link } from "react-router-dom"

import { Form } from "../../components/Form/Form";
import img_black from "../../assets/arrow-black.png"

import s from "./CreateDog.module.css"

export const CreateDog = () => {
    return(
        <div className={s.container}>

            <div className={s.div_link}>
                <Link className={s.link} to="/home">
                    <img src={img_black} alt={img_black} />
                    <h2>Back to home</h2>
                </Link>
            </div>

            <Form/>
        </div>
    )
}
