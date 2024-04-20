import express, { Express } from "express";
import path from "path";
import dotenv from "dotenv";
import router from "./src/routes/api/router";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const PORT = process.env.PORT || 3000;

class Server {
  private app: Express;
  constructor() {
    this.app = express();
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use("/api/v1", router);
  }

  public run() {
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  }
}

new Server().run();
