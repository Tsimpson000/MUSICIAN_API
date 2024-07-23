const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    artists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Musician'
    }]
});

module.exports = mongoose.model("Manager", managerSchema);