import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listarAutores = await autor.find({});
      res.status(200).json(listarAutores);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Não foi possível consultar os autores`,
      });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const cadastrarAutor = await autor.create(req.body);
      res.status(201).json({
        message: "Autor cadastrado com sucesso!",
        autor: cadastrarAutor,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error} - Não foi possível cadastrar um novo autor!`,
      });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontradoPorId = await autor.findById(id);
      res.status(200).json(autorEncontradoPorId);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao tentar encontrar autor!`,
      });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "Dados do autor atualizados com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao tentar atualizar dados do autor!`,
      });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({
        message: "Autor deletado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Não foi possível deletar o autor!`,
      });
    }
  }
}

export default AutorController;
