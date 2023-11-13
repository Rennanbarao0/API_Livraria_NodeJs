import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O senhor dos aneis",
  },
  {
    id: 2,
    titulo: "Harry Potter",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado!");
});

export default app;
