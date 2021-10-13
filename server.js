const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const announcedLgaResults = require("./routes/electionRouter");


const app = express();
//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
dotenv.config();
// app.use(express.static(path.join(__dirname, "public")));

//listening to the port
app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("start the backend");
});
//Connect to mongodb
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Databaee connected");
  }
);

app.get("/", (req, res) => {
  res.status(200).send("Hello world make global come through");
});

// const postBookRouter = require("./routes/postBook");
app.use("/api/election", announcedLgaResults);
