export class DireccionesController {
  constructor({ dbModel }) {
    this.dbModel = dbModel;
  }

  getAll = async (req, res) => {
    try {
      const result = await this.dbModel.getDirecciones();
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
