const Router = require("express")
const { getDetailPokemon } = require("../controllers/getDetailPokemon")
const { getDogs } = require("../controllers/getDogs")
const { postDog } = require("../controllers/postDog")
const { postValidate } = require("../middlewares")

const dogsRouter = Router()

dogsRouter.get("/:id", getDetailPokemon)
dogsRouter.get("/", getDogs)
dogsRouter.post("/", postValidate, postDog)

module.exports = { dogsRouter }
