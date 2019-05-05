const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        unique: [true, "Name must be unique!"], 
        minlength: [3, "Name must be at least than 3 characters!"]
    },
    type: {
        type: String,
        required: [true, "Type of pet is required!"],
        minlength: [3, "Type must be at least than 3 characters!"]
    },
    description: {
        type: String,
        required: [true, "Description of pet is required!"],
        minlength: [3, "Description must be at least than 3 characters!"]
    },
    skill1:{
        type:String,
        required: [false]
    },

    skill2:{
        type:String,
        required: [false]
    },

    skill3:{
        type:String,
        required: [false]
    },
    like: {
        type: Number,
        required: [false]
    }
}, {timestamps: true});


PetSchema.plugin(uniqueValidator, {message: "Name must be unique!"});
mongoose.model("Pet", PetSchema);