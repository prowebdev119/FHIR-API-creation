const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FhirSchema = new Schema({
})

module.exports = mongoose.model("Fhir",FhirSchema)