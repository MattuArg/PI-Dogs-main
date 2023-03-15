import React from "react";

import error_404 from "../../../assets/404.png"
import s from "./Error_Teal.module.css"

export let Error_Teal = () => {
    return(
        <div className={s.error_teal}>

            <img className={s.img_teal} src={error_404} alt={error_404} />
            <h1 className={s.h_teal}>DOGS NOT FOUND</h1>
            <h2>The dog indicated in the search was not found</h2>
        </div>
    )
}
