export let validate = (form) => {

    let errors = {}    

    // if (!form.name) errors.name = "Name is required"
    if (form.name ? !/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/.test(form.name): null)
        errors.name = "Only letters are required"
    else if (form.name ? !/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]{3,20}$/.test(form.name): null)
        errors.name = "3 to 50 characters are required"
    
    
    // if (!form.image) errors.image = "Image is required"
    if (form.image) {
        if (!form.image.includes(".jpg"))
        if (!form.image.includes(".png"))
        errors.image = "The image has to be .jpg or .png"
    }

    // if (!form.min_height) errors.min_height = "Height is required"
    if (parseInt(form.min_height) < 2)
        errors.min_height = "The minimum height has to be greater than 1 cm"
    else if (parseInt(form.min_height) > 196)
        errors.min_height = "you exceeded the maximum (196 cm)"

    // if (!form.max_height) errors.max_height = "Height is required"
    if (parseInt(form.max_height) > 200)
        errors.max_height = "The maximum height has to be less than 200 cm"
    else if (parseInt(form.max_height) <= parseInt(form.min_height))
        errors.max_height = "The max. height should be greater than the min. height"


    // if (!form.min_weight) errors.min_weight = "Weight is required"
     if (parseInt(form.min_weight) < 2)
        errors.min_weight = "The minimum weight has to be greater than 1 kg"
    else if (parseInt(form.min_weight) > 96)
        errors.min_weight = "you exceeded the maximum (96 kg)"

    // if (!form.max_weight) errors.max_weight = "Weight is required"
    if (parseInt(form.max_weight) > 100)
        errors.max_weight = "The maximum weight has to be less than 100 kg"
    else if (parseInt(form.max_weight) <= parseInt(form.min_weight))
        errors.max_weight = "The max. weight should be greater than the min. weight"

    
    // if (!form.min_life_sapn) errors.min_life_span = "Life span is required"
    if (parseInt(form.min_life_span) < 2)
        errors.min_life_span = "The minimum life span has to be greater than 1 year"
    else if (parseInt(form.min_life_span) > 28)
        errors.min_life_span = "you exceeded the maximum (28 years)"

    // if (!form.max_life_span) errors.max_life_span = "Life span is required"
    if (parseInt(form.max_life_span) > 30)
        errors.max_life_span = "The maximum life span has to be less than 30 years"
    else if (parseInt(form.max_life_span) <= parseInt(form.min_life_span))
        errors.max_life_span = "The max. life span should be greater than the min. life span"

    if (form.temperaments.length ?
        form.temperaments.length < 2 || form.temperaments.length > 4 : null
       ) {errors.temperaments = "Minimum 2 and maximum 10 temperaments is required"}

    return errors
}
