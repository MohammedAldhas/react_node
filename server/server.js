const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();
//Schema
const Lists = require("./models/Lists");
const userName = "m7md51177",
  pass = process.env.PASS;
const PORT = 3001;

//get all  //..//
app.get("/lists", async (req, res) => {
  //   const allLists = await Lists.find();
  //   return res.json(allLists);

  await Lists.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

//add  //..//
app.post("/lists/create", async (req, res) => {
  await Lists.create(req.body)
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
//ubdate ///....///
app.put("/lists/update/:id", async (req, res) => {
  const id = req.params.id;
  await Lists.findByIdAndUpdate(id, {
    importance: req.body.importance,
    title: req.body.title,
    info: req.body.info,
  })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
//get
app.get("/lists/:id", async (req, res) => {
  const id = req.params.id;

  await Lists.findById(id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
//Delete //...//
app.delete("/lists/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Lists.findOneAndDelete(id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

const start = async () => {
  console.log("loading....");
  await mongoose
    .connect(
      `mongodb+srv://${userName}:${pass}@cluster01.4t7qrmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01`
    )
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:\n", error);
    });
};

start();
