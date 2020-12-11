import express from "express";
import type { Request, Response, NextFunction } from "express";
const router = express.Router();
import { getData } from "../app/index";

/* GET home page. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/", (req: Request, res: Response, _next: NextFunction) => {
  getData();
  res.render("index", { title: "Focus On!" });
});

module.exports = router;
