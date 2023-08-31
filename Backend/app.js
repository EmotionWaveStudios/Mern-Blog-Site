import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "../route/users-route";
import blogRouter from "../route/blogs-route";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", router); // localhost:5000/api/user/
app.use("/api/blog", blogRouter); // localhost:5000/api/blog/

mongoose
  .connect(process.env.MONGO_DB)
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(
        "app is Listing to localhost and post number is",
        process.env.PORT
      );
    })
  )
  .catch((err) => {
    console.log(err);
  });
