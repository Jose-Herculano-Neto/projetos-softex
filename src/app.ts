import express from "express";
import { atualizarUsuario, cadastrarUsuario, deletarUsuario, listarUsuarios } from "./controller/user";
import ProductController from "./controller/product";



const app = express();

app.use(express.json());

// Rotas
app.post("/users", cadastrarUsuario);
app.get("/users", listarUsuarios);
app.patch("/users/:user_id", atualizarUsuario);
app.delete("/users/:user_id", deletarUsuario);

// Rotas products
app.post("/products", ProductController.createProduct)
app.get('/products', ProductController.listProducts)


export default app;