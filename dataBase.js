const mongoose = require('mongoose')
require("dotenv").config()

async function connectDataBase() {
    try {
        console.log('Data base is inicialized')

    await  mongoose.connect(process.env.MONGO_URL)
    console.log('Data base connection completed!')
    } catch(error) {
        console.log(error)
    }


}

module.exports = connectDataBase