import Express from "express";
import { config } from "dotenv";
import chalk from "chalk";
// Routers
import apiRouter from "./api";
import cors from "cors";

config();

const { PORT } = process.env;

if (!PORT || !Number(PORT)) {
  throw new Error("PORT is not defined or not a number");
}

const app = Express();

app.use(cors());

app.use("/api", apiRouter);

app.use("/*", Express.static("dist"));

app.listen(Number(PORT), () => {
  console.info(
    `Lightning server is running on ${chalk.blue(`http://localhost:${chalk.bold(PORT)}`)}`,
  );
});
