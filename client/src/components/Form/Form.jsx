import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getTemperaments, postDog } from "../../redux/actions";
import { validate } from "./Validate";

import s from "./Form.module.css"

export let Form = () => {

    let dispatch = useDispatch()
    let temperaments = useSelector(state => state.temperaments)

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
    
    let [errors, setErrors] = useState({})


    let handleChange = (e) => {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        let objErrors = validate({...form, [e.target.name]: e.target.value})
        setErrors(objErrors)
    }


    let handleSelect = (e) => {
        if(e.target.value == "Select" || form.temperaments.includes(e.target.value)) {
            return null
        }

        setForm({
            ...form,
            temperaments: [...form.temperaments, e.target.value]
        })

        let objErrors = validate({...form, temperaments: [...form.temperaments, e.target.value]})
        setErrors(objErrors)
    }


    let handleDelete = (temp) => {
        let deletee = form.temperaments.filter(t => t !== temp)

        setForm({
            ...form,
            temperaments: deletee
        })

        let objErrors = validate({...form, temperaments: deletee})
        setErrors(objErrors)
    }


    let handleBlur = (e) => {

        var objErrors = validate({...form})

        let errors = {...objErrors}
        console.log(e);

        
        if (e.target.name == "name" && e.target.value == "" && form.name == "") {
            errors.name = "Name is required"; setErrors(errors); console.log(errors);
        }
        if (e.target.name == "image" && e.target.value == "") {
            errors.image = "Image is required"; setErrors(errors); console.log(errors);
        }
        if (e.target.name == "min_height" && e.target.value == "") {
            errors.min_height = "Min. Height is required"; setErrors(errors); console.log(errors);
        }
        if (e.target.name == "max_height" && e.target.value == "") {
            errors.max_height = "Max. Height is required"; setErrors(errors)
        }
        if (e.target.name == "min_weight" && e.target.value == "") {
            errors.min_weight = "Min. Weight is required"; setErrors(errors)
        }
        if (e.target.name == "max_weight" && e.target.value == "") {
            errors.max_weight = "Max. Weight is required"; setErrors(errors)
        }
        if (e.target.name == "min_life_span" && e.target.value == "") {
            errors.min_life_span = "Min. Life span is required"; setErrors(errors)
        }
        if (e.target.name == "max_life_span" && e.target.value == "") {
            errors.max_life_span = "Max. Life span is required"; setErrors(errors)
        }
        if (e.target.name == "temperaments") {
            if (!form.temperaments.length) {
                errors.temp_select = "Temperaments are required"; setErrors(errors)
            }
        }
    }


    let handleSubmit = (e) => {
        e.preventDefault()

        let { name, image, temperaments } = form

        let sendForm= {
            name,
            image,
            height: `${form.min_height} - ${form.max_height}`,
            weight: `${form.min_weight} - ${form.max_weight}`,
            life_span: `${form.min_life_span} - ${form.max_life_span}`,
            temperaments
        }

        dispatch(postDog(sendForm))
        console.log(sendForm);

        setTimeout(() => {
            alert("CONGRATULATIONS❗❗, you have created a new DOG");
        }, 4000);

        setForm({
            name: "",
            image: "",
            min_height: "",
            max_height: "",
            min_weight: "",
            max_weight: "",
            min_life_span: "",
            max_life_span: "",
            temperaments: ""
        })

    }


    useEffect(() => {
        dispatch(getTemperaments())
    }, [])

    return (
        <form className={s.form} onSubmit={handleSubmit}>

            <h1 className={s.title}>Create your ideal dog</h1>
            <h2>Fill in the blank fields</h2>
            
{/*NAME ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Name: </h3>
                <input type="text"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    placeholder="Name..."
                    onBlur={handleBlur}
                />

                { errors.name && <p>{errors.name}</p> }

                <br />

{/*IMAGE ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Image: </h3>
                <input type="text"
                    value={form.image}
                    name="image"
                    onChange={handleChange}
                    placeholder="Url..." 
                    onBlur={handleBlur}
                />

                { errors.image && <p>{errors.image}</p> }

                <br />

{/*HEIGHT ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Height in cm: </h3>
                <input type="number" 
                    value={form.min_height}
                    name="min_height"
                    onChange={handleChange}
                    placeholder="Min height..."
                    onBlur={handleBlur}
                />

                { errors.min_height && <p>{errors.min_height}</p> }

                <br />
            
                <input type="number"
                    value={form.max_height}
                    name="max_height"
                    onChange={handleChange}
                    placeholder="Max height..."
                    onBlur={handleBlur}
                />

                { errors.max_height && <p>{errors.max_height}</p> }

                <br />

{/*WEIGHT ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Weight in cm: </h3>
                <input type="number"
                    value={form.min_weight}
                    name="min_weight"
                    onChange={handleChange}
                    placeholder="Min weight..."
                    onBlur={handleBlur}
                />

                { errors.min_weight && <p>{errors.min_weight}</p> }

                <br />
            
                <input type="number"
                    value={form.max_weight}
                    name="max_weight"
                    onChange={handleChange}
                    placeholder="Max weight..."
                    onBlur={handleBlur}
                />

                { errors.max_weight && <p>{errors.max_weight}</p> }

                <br />

{/*LIFE SPAN ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Life span in years: </h3>
                <input type="number" 
                    value={form.min_life_span}
                    name="min_life_span"
                    onChange={handleChange}
                    placeholder="Min life span..."
                    onBlur={handleBlur}
                />

                { errors.min_life_span && <p>{errors.min_life_span}</p> }

                <br />

                <input type="number"
                    value={form.max_life_span}
                    name="max_life_span"
                    onChange={handleChange}
                    placeholder="Max life span..."
                    onBlur={handleBlur}
                />

                { errors.max_life_span && <p>{errors.max_life_span}</p> }

                <br />

{/*TEMPERAMENTS ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <h3>Select the Temperaments your need for your Dog: </h3>
                <select onChange={handleSelect}
                    name="temperaments"
                    onBlur={handleBlur}
                >

                    <option className={s.op_select} value="Select" >Select</option>
                    {
                        temperaments.length && temperaments.map((temp,i) => {
                            return <option key={i}>{temp}</option>
                        })
                    }

                </select>
                <br />

                { errors.temp_select && <p>{errors.temp_select}</p> }


                <h4>Your added Temperaments:</h4>
                {
                    form.temperaments && form.temperaments.map((temp,i) => {
                        return (
                            <div key={i}>
                                <span key={i}>{temp}</span>
                                <button
                                    className={s.temp_delete}
                                    type="button"
                                    onClick={() => handleDelete(temp)}
                                >
                                    x
                                </button>
                            </div>
                        )
                    })
                }

                { errors.temperaments && <p>{errors.temperaments}</p> }

                <br />

{/*BUTTON ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇*/}
            <button type="submit"
            className={s.btn_submit}
            disabled={
                Object.keys(errors).length ||
                !form.name ||
                !form.image ||
                !form.min_height ||
                !form.max_height ||
                !form.min_weight ||
                !form.max_weight ||
                !form.min_life_span ||
                !form.max_life_span ||
                !form.temperaments.length
              }>
                Send
            </button>

        </form>
    )
}
