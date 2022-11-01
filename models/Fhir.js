const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FhirSchema = new Schema({
    resourceType:String,
    id:String,
    identifier:Object,
    timestamp:String,
    type:String,
    entry:[Object]  
})

module.exports = mongoose.model("Fhir",FhirSchema)