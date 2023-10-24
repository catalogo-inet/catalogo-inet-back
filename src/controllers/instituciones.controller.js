import { geocodeDireccion } from "../utils/geoDireccion.js";
import { getInstitucionesCordenates } from "../utils/getInstitucionesCordenates.js";

export class InstitucionesController {
  constructor({ dbModel }) {
    this.dbModel = dbModel;
  }

  getAll = async (req, res) => {
    const { codigoPostal } = req.query;
    let result;
    try {
      if (codigoPostal) {
        const [response] = await this.dbModel.getInstitucionesByCP({
          codigoPostal,
        });
        result = await getInstitucionesCordenates({ instituciones: response });
        console.log(result);
      } else {
        result = await this.dbModel.getInstituciones();
      }
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  getById = async (req, res) => {
    const { idInstitucion } = req.params;

    try {
      const [result] = await this.dbModel.getInstitucion({ idInstitucion });
      const { codigoPostal, jurisdiccion, direccion } = result;
      const cordenates = await geocodeDireccion({
        codigoPostal,
        jurisdiccion,
        direccion,
      });
      res.json({ ...result, lat: cordenates.lat, lon: cordenates.lon });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
