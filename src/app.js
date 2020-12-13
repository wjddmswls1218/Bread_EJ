import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import Bread from "../models/bread";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`));


mongoose.connect(
    `mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`,
    {
      dbName: `JEJ_PRA`,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log("❌ Failed To DB Connect");
      } else {
        console.log("✅ DB! ✅");
      }
    }
  );

app.get("/", async (req, res) => {
    const result = await Bread.find({}, {});
  
    return res.render("screens/home", { bread: result });
});



app.listen(PORT, (req, res) => {
    console.log(` ${PORT} SEVER START`);
});