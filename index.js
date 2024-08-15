const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const db = module.exports = async () =>
{
  try
  {
    await mongoose.connect(process.env.DBURI, 
      { user: process.env.DBUSERNAME, 
        pass: process.env.DBPASSWORD, 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
      });
    console.log("Connected");
  }
  catch(error)
  {
    console.log(error);
    console.log("Connection failed");
  }
};
db();

app.use('/', (req, res, next) =>
{
  console.log('A new request received at ' + new Date(Date.now()));
  next();
});

app.listen(process.env.PORT, () =>
{
  console.log(`App listeing at port: ${process.env.PORT}`);
})