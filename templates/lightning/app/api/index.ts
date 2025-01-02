import { Router } from "express";
import Log from "../database/models/log";
import { getDatabase } from "../database/db";

const router = Router();

const log = new Log(getDatabase());

router.get("/hello", (_, res) => {
  log.create("Client said hello.");
  res.send({
    message: "Hello there from the Lightning App backend",
    data: "Hello there from the Lightning App backend",
  });
});

router.get("/logs", async (_, res) => {
  try {
    const logs = log.all();
    res.send({
      message: "Logs fetched successfully",
      data: logs,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

export default router;
