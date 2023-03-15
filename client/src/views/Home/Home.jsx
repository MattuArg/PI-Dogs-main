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
import { Error_Red } from "../../components/Error/Error_Red/Error_Red";
import { Error_Teal } from "../../components/Error/Error_Teal/Error_Teal";
import s from "./Home.module.css"

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


            {
                errors.getDogs ? 
                <Error_Red/> :

                errors.getDogName ?
                <div>
                    <Refresh_Dogs setCurrentPage={setCurrentPage}/>
                    <Error_Teal/>
                </div> :
                
                <div>

                    <Back_Forth/>
                    <SearchBar/>

                    <div className={s.filter_order}>
                        <Filter_Api_Db setCurrentPage={setCurrentPage}/>
                        <Order_Alphabetically setCurrentPage={setCurrentPage}/>
                        <Order_Weight setCurrentPage={setCurrentPage}/>
                        <Filter_Temperaments setCurrentPage={setCurrentPage}/>
                    </div>

                    <Refresh_Dogs setCurrentPage={setCurrentPage}/>

                    <Pagination
                        dogs={dogs.length}
                        dogsPerPage={dogsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    
                    <Cards dogs={current_Dogs}/>
            
                    <Pagination
                        dogs={dogs.length}
                        dogsPerPage={dogsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />

                </div>
            }

        </div>
    )
}
