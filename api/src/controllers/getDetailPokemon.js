const { getDetail } = require("../helper/index")

let getDetailPokemon = async (req, res) => {

    try {
        let { id } = req.params

        let findId = await getDetail(id)

        findId.length ?
        res.send(findId) :
        res.status(404).send({ ERROR: `ID(${id}) does not exist` })
    
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
}

module.exports = { getDetailPokemon }
