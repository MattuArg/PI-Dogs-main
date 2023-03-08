let postValidate = async (req, res, next) => {
    let { name, image, height, weight, life_span, temperaments } = req.body

    !name ?
    res.status(404).send({ ERROR: "missing name" }) :
    !image ?
    res.status(404).send({ ERROR: "missing image" }) :
    !height ?
    res.status(404).send({ ERROR: "missing height" }) :
    !weight ?
    res.status(404).send({ ERROR: "missing weight" }) :
    !life_span ?
    res.status(404).send({ ERROR: "missing life_span" }) :
    !temperaments || !temperaments.length ?
    res.status(404).send({ ERROR: "missing temperaments" }) :
    next()
}

module.exports = { postValidate }
