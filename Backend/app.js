import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(
        "app is listening to localhost and port number",
        process.env.PORT
      );
    })
  )
  .catch((err) => {
    console.log(err);
  });
