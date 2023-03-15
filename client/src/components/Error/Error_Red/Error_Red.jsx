import React from "react";

import error_404 from "../../../assets/404.png"
import s from "./Error_Red.module.css"

export let Error_Red = () => {
    return(
        <div className={s.error_red}>

            <img className={s.img_red} src={error_404} alt={error_404} />
            <h1 className={s.h_red}>DOGS NOT FOUND</h1>
            <h2>Problems with the Api Dog</h2>
        </div>
    )
}
