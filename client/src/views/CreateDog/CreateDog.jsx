import React from "react";

import { Form } from "../../components/Form/Form";
import { Back } from "../../assets/Link/Back/Back";

import s from "./CreateDog.module.css"

export const CreateDog = () => {
    return(
        <div className={s.container}>

            <Back/>
            <Form/>
        </div>
    )
}
