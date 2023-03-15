const express = require('express')
const router = express.Router()

import {getAllCars, createCar } from "../controllers/controller"

router.route("/").get(getAllCars).post(createCar)
export default router