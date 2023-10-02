import express from "express";
import { cadastrarUsuario } from "./controller/user";

const app = express();

app.use(express.json());

// Rotas
app.post("/users", cadastrarUsuario);
app.get("/users");
app.put("/users");
app.delete("/users");



export default app;