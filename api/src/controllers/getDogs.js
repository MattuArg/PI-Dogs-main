const { getDogs_Api_Db, getName } = require("../helper/index")

let getDogs = async (req, res) => {
    
    try {
        let { name } = req.query
        
        if(name){
            let findName = await getName(name)

            findName.length ?
            res.send(findName) :
            res.status(404).send({ ERROR: `Name(${name}) does not exist` })
        } else {
            let allDogs = await getDogs_Api_Db()

            res.send(allDogs)
        }
        
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
}

module.exports = { getDogs }
