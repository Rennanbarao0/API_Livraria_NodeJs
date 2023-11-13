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
}

export default LivroController;
