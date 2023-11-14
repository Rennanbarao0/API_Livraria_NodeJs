import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({
        message: `${erro.message} - Falha ao tentar encontrar lista de livros!`,
      });
    }
  }
  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "Livro criado com sucesso!", livro: novoLivro });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Não foi possível cadastrar o livro!`,
      });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontradoPorId = await livro.findById(id);
      res.status(200).json(livroEncontradoPorId);
    } catch (error) {
      res.status(500).json({
        message: `${erro.message} - Falha ao tentar listar livro!`,
      });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({
        message: `${erro.message} - Falha ao tentar atualizar livro!`,
      });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({
        message: `${erro.message} - Falha ao tentar deletar livro!`,
      });
    }
  }
}

export default LivroController;
