const { Dog, Temperaments } = require("../db");

let postDog = async (req, res) => {
    try {
        let { name ,image ,height, weight, life_span, temperaments } = req.body
        
        let findTemp = await Temperaments.findAll({ where: { name: temperaments }})

        let dogCreated = await Dog.create({
            name,
            image,
            height,
            weight,
            life_span, 
            origin: "DB"
        })

        let result = await dogCreated.addTemperaments(findTemp)
        res.send(result)

    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
}

module.exports = { postDog }
