import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts";

const CONNECTION_URL =
  "mongodb+srv://admin:x9J0ZJujnZPGjdKT@cluster0.f9ywk.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;
const app = express();
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb " }));
app.use(bodyParser.urlencoded({ limit: "30mb ", extended: true }));
app.use(cors());

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log("Server running on port: ", PORT))
  )
  .catch((e) => console.error(e.message));

mongoose.set("useFindAndModify", false);

// app.get("/", (req, res) => {
//   res.send("The sedulous hyena ate the antelope!");
// });
// app.listen(port, () => {
//   return console.log(`server is listening on ${port}`);
// });

// app.listen(port).on("error", (e) => console.error(e));
