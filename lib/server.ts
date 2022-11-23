import express, { Application } from "express";
import db from "../db/connection";
import userRoutes from "../routes/user.route";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: "/api/users/v1",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    // Metodos iniciales
    this.dbConnection();
    this.middleware();
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server runing on port: " + this.port);
    });
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("database online!");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  getApp() {
    return this.app;
  }
}

export default Server;
