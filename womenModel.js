const mongoose = require('mongoose')

const womenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true

    },

    bio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', womenSchema)