import UsuariosRepository from "../repositories/UsuariosRepository.js"

class UsuariosController {
  
    async index(req, res) {
      const row = await UsuariosRepository.findAll()
      res.json(row) 
    };

    async show(req, res) {
      const id = req.params.id
      const row = await UsuariosRepository.findById(id)
      res.json(row)
    };

    async store(req, res) {
      const usuario = req.body;  
      const row = await UsuariosRepository.create(usuario)
      res.json(row)
    };

    async update(req, res) {
        const id = req.params.id;
        const usuario = req.body;
        const row = await UsuariosRepository.update(usuario, id)
    };

    async delete(req, res) {
        const id = req.params.id;
        const row = await UsuariosRepository.delete(id)
    };
}

// Padrão Singleton
export default new UsuariosController()