import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: "30mb " }));
app.use(bodyParser.urlencoded({ limit: "30mb ", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

app.listen(port).on("error", (e) => console.error(e));
