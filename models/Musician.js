const mongoose = require("mongoose");

//define a schema. Where we define properties for Musician

const musicianSchema = new mongoose.Schema({
artistName:{
    type: String,
    required: true,
},
location:{
    type: String,
    required: true,
},
genre:{
    type: String,
    required: true,
},
bookingPrice:{
    type: Number,
    required: true,
},
manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manager',  // Referencing the Manager model
    required: true,
}
});


//creating model from the schema and exporting
module.exports = mongoose.model("Musician", musicianSchema);