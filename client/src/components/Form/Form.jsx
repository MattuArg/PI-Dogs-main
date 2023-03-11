import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getTemperaments } from "../../redux/actions";

import s from "./Form.module.css"

export let Form = () => {

    let dispatch = useDispatch()
    let temperaments = useSelector(state => state.temperaments)

    useEffect(() => {
        dispatch(getTemperaments())
    }, [])

    let [form, setForm] = useState({
        name: "",
        image: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        min_life_span: "",
        max_life_span: "",
        temperaments: []

    })

    let handleChange = (e) => {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    let handleSelect = (e) => {
        if(e.target.value == "Select" || form.temperaments.includes(e.target.value)) {
            return null
        }

        setForm({
            ...form,
            temperaments: [...form.temperaments, e.target.value]
        })
    
    }

    let handleDelete = (temp) => {
        let deletee = form.temperaments.filter(t => t !== temp)

        setForm({
            ...form,
            temperaments: deletee
        })
    }

    let handleSubmit = () => {
    }

    return (
        <form onSubmit={handleSubmit}>

{/*NAME ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Name: </h3>
            <input type="text"
                value={form.name}
                name="name"
                onChange={handleChange}
                placeholder="Name..." 

            />
            <br />

{/*IMAGE ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Image: </h3>
            <input type="text"
                value={form.image}
                name="image"
                onChange={handleChange}
                placeholder="Image..." 
            />
            <br />

{/*HEIGHT ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Height: </h3>
                <input type="number" 
                    value={form.min_height}
                    name="min_height"
                    onChange={handleChange}
                    placeholder="Min height..."
                />
                <br />
            
                <input type="number"
                    value={form.max_height}
                    name="max_height"
                    onChange={handleChange}
                    placeholder="Max height..."
                />
                <br />

{/*WEIGHT ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Weight: </h3>
                <input type="number"
                    value={form.min_weight}
                    name="min_weight"
                    onChange={handleChange}
                    placeholder="Min weight..."
                />
                <br />
            
                <input type="number"
                    value={form.max_weight}
                    name="max_weight"
                    onChange={handleChange}
                    placeholder="Max weight..."
                />
                <br />

{/*LIFE SPAN ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Life span: </h3>
                <input type="number" 
                    value={form.min_life_span}
                    name="min_life_span"
                    onChange={handleChange}
                    placeholder="Min life span..."
                />
                <br />
            
                <input type="number"
                    value={form.max_life_span}
                    name="max_life_span"
                    onChange={handleChange}
                    placeholder="Max life span..."
                />
                <br />

{/*TEMPERAMENTS ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Temperaments: </h3>
                <select onChange={handleSelect}>

                    <option value="Select">Select</option>
                    {
                        temperaments.length && temperaments.map((temp,i) => {
                            return <option key={i}>{temp}</option>
                        })
                    }

                </select>

                <h4>Your added Temperaments:</h4>
                {
                    form.temperaments && form.temperaments.map((temp,i) => {
                        return (
                            <div key={i}>
                                <span key={i}>{temp}</span>
                                <button
                                    className={s.btn_delete}
                                    type="button"
                                    onClick={() => handleDelete(temp)}
                                >
                                    x
                                </button>
                            </div>
                        )
                    })
                }

                <br />

{/*BUTTON ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <button type="submit">
                Send
            </button>

        </form>
    )
}
