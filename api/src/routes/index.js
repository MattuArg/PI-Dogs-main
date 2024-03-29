const { Router } = require('express');
const { dogsRouter } = require('./dogsRouter');
const { temperamentsRouter } = require('./temperamentsRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use("/dogs", dogsRouter)
mainRouter.use("/temperaments", temperamentsRouter)

module.exports = mainRouter;
