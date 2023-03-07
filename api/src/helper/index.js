const { default: axios } = require("axios")

const { Dog, Temperaments } = require(".././db")

let getDogsApi = async () => {
    let dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds`/*?api_key=${API_KEY}*/)

    let dogsInfo = dogApi.data.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            // heigth: dog.height.metric,
            weight: dog.weight.metric,
            // life_span: dog.life_span
            temperaments: dog.temperament
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
    let dogsApi = await getDogsDb()
    let dogsDb = await getDogsApi()

    return [...dogsApi, ...dogsDb]
}

let getName = async (name) => {
    let allDogs = await getDogs_Api_Db()

    return allDogs.filter(dog => dog.name.toUpperCase().includes(name.toUpperCase()))
}

let getAllTemperaments = async () => {
}

let getDetail = async (id) => {
    let allDogs = await getDogs_Api_Db()
    // let dogpru = await getDogsDb()

    // console.log(dogpru);
    return allDogs.filter(dog => dog.id == id)
}

module.exports = { getDogsApi, getDogs_Api_Db, getName, getAllTemperaments, getDetail }
