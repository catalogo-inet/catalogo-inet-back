export class DepartamentoController {
  constructor({ departamentoModel }) {
    this.departamentoModel = departamentoModel;
  }

  getAll = async (req, res) => {
    try {
      const result = await this.departamentoModel.getAll();
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  getById = async (req, res) => {
    const { idDepartamento } = req.params;
    try {
      const user = await this.departamentoModel.getById({ idDepartamento });
      if (user.length <= 0)
        return res
          .status(404)
          .json({ error: "No se encontró el departamento" });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
