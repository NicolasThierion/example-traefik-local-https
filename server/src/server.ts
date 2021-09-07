import express from "express";
import cors from "cors";
import { USERS } from "./users";

export function startServer(port = 3000) {
  const app = express().use(cors())

  app.get("/users", (req, res) => {
    res.send(USERS);
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
