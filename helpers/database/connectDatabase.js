const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
      console.log("MongoDb Connection Successful");
    })
    .catch(err => console.log(new Error(err)));
};

module.exports = connectDatabase;