import app from "./app.js";
import "dotenv/config";

const SERVER_PORT = process.env.SERVER_PORT || 9001;

app
  .listen(SERVER_PORT, () => {
    console.log(`🚀 Server is running on: http://localhost:${SERVER_PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });