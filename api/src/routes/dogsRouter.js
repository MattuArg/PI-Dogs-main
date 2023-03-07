const Router = require("express")
const { getDetailPokemon } = require("../controllers/getDetailPokemon")
const { getDogs } = require("../controllers/getDogs")
const { postDog } = require("../controllers/postDog")

const dogsRouter = Router()

dogsRouter.get("/:id", getDetailPokemon)
dogsRouter.get("/", getDogs)
// dogsRouter.post("/", postDog)

module.exports = { dogsRouter }
