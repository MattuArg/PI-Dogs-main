const { getAllTemperaments } = require("../helper/index")

let getTemperaments = async (req,res) => {

    try {
        let allTemperaments = await getAllTemperaments()
        
        res.send(allTemperaments)

    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
}

module.exports = { getTemperaments }
