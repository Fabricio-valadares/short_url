import express from "express";
import { short } from "./Router/shots";
import { MongooseConfig } from "./config";

const app = express();
app.use(express.json());

app.use(short);

const mongooseConfig = new MongooseConfig();
mongooseConfig.configConnect();

app.listen(3333, () => {
  console.log("Run server 3333 !");
});
