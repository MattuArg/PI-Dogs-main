import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Cards } from "../../components/Cards/Cards";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filter_Api_Db } from "../../components/Filter/Filter_Api_Db";
import { Filter_Temperaments } from "../../components/Filter/Filter_Temperaments";
import { Order_Alphabetically } from "../../components/Order/Order_Alphabetically";
import { Order_Weight } from "../../components/Order/Order_Weight";
import { Refresh_Dogs } from "../../components/Refresh/Refresh_Dogs";

import { getDogs, getTemperaments } from "../../redux/actions";

import { Back_Forth } from "../../assets/Link/Back_Forth/Back_Forth";
import s from "./Home.module.css"
import { Error_404 } from "../../components/Error/Error_404";

export const Home = () => {

    let dispatch = useDispatch()
    
    let dogs= useSelector(state => state.dogs)
    let errors= useSelector(state => state.errors)

    let [currentPage, setCurrentPage] = useState(1)
    let dogsPerPage= 8

    let last_Dog = currentPage * dogsPerPage
    let first_Dog = last_Dog - dogsPerPage

    let current_Dogs = dogs.slice(first_Dog, last_Dog)

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperaments())
    }, [])

    return(
        <div className={s.container}>

            <Back_Forth/>

            <SearchBar/>

            <div className={s.filter_order}>
                <Order_Weight setCurrentPage={setCurrentPage}/>
                <Order_Alphabetically setCurrentPage={setCurrentPage}/>
                <Filter_Temperaments setCurrentPage={setCurrentPage}/>
                <Filter_Api_Db setCurrentPage={setCurrentPage}/>
            </div>

            <Refresh_Dogs setCurrentPage={setCurrentPage}/>

            <Pagination
                dogs={dogs.length}
                dogsPerPage={dogsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            
            <Cards dogs={current_Dogs} errors={errors}/>
            
            <Pagination
                dogs={dogs.length}
                dogsPerPage={dogsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
