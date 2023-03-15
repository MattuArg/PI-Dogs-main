import React from "react";

import error_404 from "../../../assets/404.png"
import s from "./Error_Green.module.css"

export let Error_Green = () => {
    return(
        <div className={s.error_green}>

            <img className={s.img_green} src={error_404} alt={error_404} />
            <h1 className={s.h_green}>DOGS NOT FOUND</h1>
            <h2>The indicated id does not exist</h2>
        </div>
    )
}
