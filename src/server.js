import app from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT || 9001;

app
  .listen(PORT, () => {
    console.log(`🚀 Server is running on: http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });