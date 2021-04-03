import createError from "http-errors";
import express from "express";
import path from "path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logger = require("morgan");
import cookieParser from "cookie-parser";

import indexRouter from "./routes/index";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(404));
});

// ローカルサーバが使用するポート番号
// 開発者の環境の都合に合わせて変更してください
// TODO: dotenvを作成してそちらに記述するようにする
const port = 8000;

app.listen(port, () => {
  console.log(`Welcome to RemoSync Backend: http://localhost:${port}`);
});
