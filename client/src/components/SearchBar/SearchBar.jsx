import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { BiSearchAlt } from "react-icons/bi"
import { FaDog } from "react-icons/fa"

import { getDogName } from "../../redux/actions";

export const SearchBar = () => {

    let dispatch = useDispatch()

    let [searchDog, setSearchDog] = useState("")

    let handleChange = (e) => {
        setSearchDog(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getDogName(searchDog))
        setSearchDog("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <FaDog/>
            <input
                type="text"
                value={searchDog}
                onChange={handleChange}
                placeholder="Search Dog..."
            />
            
            <button type="submit">
                <BiSearchAlt/>
            </button>
        </form>
    )
}
