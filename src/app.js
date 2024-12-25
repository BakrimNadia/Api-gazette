import express from "express";
import cors from "cors";
import "dotenv/config";
import { bodySanitizer } from "./middlewares/bodySanitizer.js";

import { router as apiRouter } from "./routers/router.js";

const VERSION = process.env.VERSION || 1;
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(bodySanitizer);

app.get("/", (req, res) => {
  res.json({
    hello: "Welcome to the Gazette REST API!",
  });
});
app.use(`/api/v${VERSION}`, apiRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});

export default app;