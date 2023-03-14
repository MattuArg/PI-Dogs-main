import React, { useState } from "react";
import { useDispatch } from "react-redux"

import { BiSearchAlt } from "react-icons/bi"
import { FaDog } from "react-icons/fa"

import { empty_Array, getDogName } from "../../redux/actions";

import s from "./SearchBar.module.css"

export const SearchBar = () => {

    let dispatch = useDispatch()

    let [searchDog, setSearchDog] = useState("")

    let handleChange = (e) => {
        setSearchDog(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(empty_Array("For_DogName"))
        dispatch(getDogName(searchDog))
        setSearchDog("")
    }

    return(
        <div>
            <form className={s.form} onSubmit={handleSubmit}>
                <FaDog className={s.icon_dog}/>
                <input className={s.input}
                    type="text"
                    value={searchDog}
                    onChange={handleChange}
                    placeholder="Search Dog..."
                />
            
                <button className={s.btn_submit} type="submit">
                    <BiSearchAlt className={s.icon_search}/>
                </button>
            </form>
        </div>
    )
}
