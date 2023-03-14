const { default: axios } = require("axios")

const { Dog, Temperaments } = require(".././db")

let getAllTemperaments = async () => {
    let allDogs = await getDogsApi()

    let temperaments = allDogs.map(dog => dog.temperaments)

    let temp = temperaments.join(", ").split(", ")

    let temp_notRepeated = [...new Set(temp)]

    let result = temp_notRepeated.filter(temp => temp !== "")

    result.forEach(temp => {
        Temperaments.findOrCreate({ where: { name: temp} })
    })

    return result
}

let getDogsApi = async () => {
    let dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds`/*?api_key=${API_KEY}*/)

    let dogsInfo = dogApi.data.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            temperaments: dog.temperament,
            origin: "API"
        }
    })

    return dogsInfo
}

let getDogsDb = async () => {
    return await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ["name"],
            through:{
                attributes: []
            }
        }
    })
}

let getDogs_Api_Db = async () => {
    let dogsApi = await getDogsApi()
    let dogsDb = await getDogsDb()

    dogsDb = dogsDb.map(dog => {
        return ({
            id: dog.id,
            name: dog.name,
            image: dog.image,
            height: dog.height,
            weight: dog.weight,
            life_span: dog.life_span,
            temperaments: dog.temperaments.map(temp => temp.name).join(", "),
            origin: "DB"
        })
    })

    return [...dogsApi, ...dogsDb]
}

let getName = async (name) => {
    let allDogs = await getDogs_Api_Db()

    return allDogs.filter(dog => dog.name.toUpperCase().includes(name.toUpperCase()))
}

let getDetail = async (id) => {
    let allDogs = await getDogs_Api_Db()

    return allDogs.filter(dog => dog.id == id)
}

module.exports = { getAllTemperaments, getDogsApi, getDogs_Api_Db, getName, getDetail }
