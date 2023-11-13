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
    try {
      const novoLivro = await livro.create(req.body);
      res
        .status(201)
        .json({ message: "Criado com sucesso!", livro: novoLivro });
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
        message: `${erro.message} - Falha ao tentar encontrar livro!`,
      });
    }
  }
}

export default LivroController;
