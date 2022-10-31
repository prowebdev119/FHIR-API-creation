const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const express = require("express");
const Fhir = require("./models/Fhir");
const multer = require("multer");
const fs = require("fs")


const storage = multer.diskStorage({
    }
  })
const upload = multer({storage})

//--[ENVIRONMENT CONFIGURATIONS]--\\
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT

//--[DATABASE CONNECTION]--\\
connectDatabase()


//--[EXPRESS]--\\
const app = express()
app.use(express.json())

app.get("/",async (req,res) => {
    var data = await Fhir.find()
    console.log(data)
    data = data.map(document => {
        const {_id,__v,...rest} = JSON.parse(JSON.stringify(document))
        return rest
    })
    res.status(200).json({
        success:true,
        data
    })
})

app.post("/", upload.single("file"), async (req,res) => {
    var file = req.file.filename
    var rawData = fs.readFileSync("./data/"+ file)
    var fhir = JSON.parse(rawData)

    const document = await new Fhir(fhir)
    document.save()
    res.json({success:true,data:document})
})


app.listen(PORT,() => {
    console.log("Server started at server " + PORT)
})