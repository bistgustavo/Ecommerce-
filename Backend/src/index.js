import { app } from "./app.js";
import dotenv from "dotenv";
import { prisma, connectDB, disconnectDB } from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 7000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening in port ${PORT} with postgres`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the server", err);
  });

process.on("SIGINT", async () => {
  await disconnectDB();
  process.exit(0);
});
