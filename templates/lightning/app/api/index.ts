import { Router } from "express";

const router = Router();

router.get("/hello", (req, res) => {
  res.send({
    message: "Hello there from the Lightning App backend",
    data: "Hello there from the Lightning App backend",
  });
});

export default router;
