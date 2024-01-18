import express from "express";
import cors from "cors";
import mongoose, { Schema } from "mongoose";
const app = express();
const port = 3100;
app.use(express.json());
app.use(cors());
const menuSchema = new Schema({
  name: String,
  price: Number,
});
const menuModel = mongoose.model("menus", menuSchema);

app.get("/menus", async (req, res) => {
  const meals = await menuModel.find({});
  res.send(meals);
});

app.get("/menus/:id", async (req, res) => {
  const { id } = req.params;
  const meal = await menuModel.findById(id);
  res.send(meal);
});

app.post("/menus", async (req, res) => {
  const { name, price } = req.body;
  const newMeals = new menuModel({ name, price });
  await newMeals.save();
  res.send("Got a POST request");
});

app.put("/menus/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const meal = await menuModel.findByIdAndUpdate(id, { name, price });
  res.send("Got a PUT request at /meal");
});

app.delete("/menus/:id", async (req, res) => {
  const { id } = req.params;
  const meal = await menuModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /meal");
});

mongoose
  .connect("mongodb+srv://qulam:qulam777@cluster0.4zefuvj.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
