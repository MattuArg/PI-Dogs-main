import React from "react";

import error_404 from "../../assets/404.png"
import s from "./Error_404.module.css"

export let Error_404 = () => {
    return(
        <div className={s.error}>
            <img src={error_404} alt={error_404} />
            <h1>DOGS NOT FOUND</h1>
        </div>
    )
}
