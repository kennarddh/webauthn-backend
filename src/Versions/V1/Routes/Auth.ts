import express from 'express'

import { Creation } from 'Versions/V1/Controllers/Auth/index.js'

import CreationValidation from "../Validation/Auth/Creation.js"

const Router = express.Router()

Router.post('/creation', CreationValidation, Creation)

export default Router
