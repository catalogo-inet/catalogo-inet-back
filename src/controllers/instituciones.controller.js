export class InstitucionesController {
  constructor({ dbModel }) {
    this.dbModel = dbModel;
  }

  getAll = async (req, res) => {
    try {
      const result = await this.dbModel.getInstituciones();
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  getById = async (req, res) => {
    const { idInstitucion } = req.params;

    try {
      const result = await this.dbModel.getInstitucion({ idInstitucion });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}