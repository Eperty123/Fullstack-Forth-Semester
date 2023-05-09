import express = require("express");
const app = express();
import Car from "../models/carModel"

const carData = [
    {
      "id": "1",
      "model": "Audi",
      "year": 2010,
      "price": 10000,
      "color": "red"
    },
    {
      "id": "2",
      "model": "Volvo",
      "year": 2012,
      "price": 12000,
      "color": "blue"
    },
    {
      "id": "3",
      "model": "Saab",
      "year": 2001,
      "price": 5000,
      "color": "green"
    },
    {
      "id": "4",
      "model": "BMW",
      "year": 2015,
      "price": 15000,
      "color": "black"
    },
    {
      "id": "5",
      "model": "Mercedes",
      "year": 2017,
      "price": 20000,
      "color": "red"
    }
  ]

  export const getCar = async(req: express.Request, res : express.Response) => {
    try {
        const id = req.params.id;
        const car  = carData[parseInt(id)]
        const carPatch = req.body;
        const objectKeys = Object.keys(carPatch);

        // objectKeys.forEach((key: string) => {
        //     car[key] = carPatch[key];
        // });
        
        res.status(200)
        .json({
                data: {carData},
                results: carData.length
            }
        )
    }
    catch(e) {
        res.status(500).json(
            {
                status: "error",
                message: e
            }
        )
    }
}

export const getAllCars = async(req: express.Request, res : express.Response) => {
    try {
        const data = await Car.find({price: {"$gt:" : 0}});

        res.status(200)
        .json({
                data: {data},
                results: data.length
            }
        )
    }
    catch(e) {
        res.status(500).json(
            {
                status: "error",
                message: e
            }
        )
    }
}

export const createCar = async(req : express.Request, res: express.Response) => {

    const jsonData = req.body;
    console.log()

    const newCar = await Car.create(req.body);

    res.status(201)
        .json({
            status: "success",
            data: newCar
        })
}