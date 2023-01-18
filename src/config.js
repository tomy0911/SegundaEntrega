const mongoose = require("mongoose");

let mongooseConnection = mongoose.connect(
  "mongodb+srv://tomas123:tomas123@cluster0.ciyvbnj.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) throw new Error("Cannot connect to MongoDB");
    console.log("DB connected");
  }
);

module.exports = mongooseConnection;
