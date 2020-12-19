import express from "express"; //  express를 사용하기 위해 import 했다.
import path from "path"; //path를 사용하기 위해 import 했다.
import dotenv from "dotenv";
dotenv.config();
import Bread from "../models/bread";
import mongoose from "mongoose";
import morgan from "morgan"; //아 왜 깃이 안 올라가 ;;
import globalRouter from "./router/globalRouter";

const app = express();
const PORT = process.env.PORT;

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
        console.log("😍 DB DB!!");
      }
    }
  );

app.get("/",globalRouter);

app.get("/bread", async (req,res)=> {
  const result = await Bread.find({},{});

  return res.render("screens/bread",{bread: result});
})


app.get("/bread", globalRouter);


app.listen(PORT, () => {
    console.log(` ${PORT} SEVER START`);
});