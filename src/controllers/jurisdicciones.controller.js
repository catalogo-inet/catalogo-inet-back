export class JurisdiccionesController {
  constructor({ dbModel }) {
    this.dbModel = dbModel;
  }

  getAll = async (req, res) => {
    try {
      const result = await this.dbModel.getJurisdicciones();
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  getById = async (req, res) => {
    const { Jurisdiccion_Id } = req.params; // Corrected parameter name

    try {
      const result = await this.dbModel.getJurisdiccion({ Jurisdiccion_Id });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
