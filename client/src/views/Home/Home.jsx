import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Cards } from "../../components/Cards/Cards";

import { getDogs } from "../../redux/actions";

import s from "./Home.module.css"

export const Home = () => {

    let dispatch = useDispatch()
    
    let dogs= useSelector(state => state.dogs)

    let [currentPage, setCurrentPage] = useState(1)
    let dogsPerPage= 8

    let last_Dog = currentPage * dogsPerPage
    let first_Dog = last_Dog - dogsPerPage

    let current_Dogs = dogs.slice(first_Dog, last_Dog)

    useEffect(() => {
        dispatch(getDogs())
    }, [])

    return(
        <div className={s.container}>
            <SearchBar/>
            <Cards dogs= {dogs}/>
        </div>
    )
}
