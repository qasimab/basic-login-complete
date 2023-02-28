const mongoose = require("mongoose");

url =
  "mongodb+srv://qasimab2:F622oIZujYsmsLGZ@cluster0.7j0jlnf.mongodb.net/?retryWrites=true&w=majority";

const conectionDb = () => {
  console.log("DB is connected");
  mongoose.set("strictQuery", false);
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = conectionDb;
