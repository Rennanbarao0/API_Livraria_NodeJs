import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);

//routes.get("/livros", LivroController.listarLivros);
//routes.post("/livros", LivroController.cadastrarLivro);
//routes.put("/livros/:id", LivroController.atualizarLivro);
//routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;
