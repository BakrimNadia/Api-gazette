import express from "express";
import cors from "cors";
import "dotenv/config";

import { router as apiRouter } from "./routers/router.js";

const VERSION = process.env.VERSION || 1;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    hello: "Welcome to the Gazette REST API!",
  });
});
app.use(`/api/v${VERSION}`, apiRouter);

export default app;