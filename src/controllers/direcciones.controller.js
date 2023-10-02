import { geocodeDireccion } from "../utils/geoDireccion.js";

export class DireccionesController {
  constructor({ dbModel }) {
    this.dbModel = dbModel;
  }

  getAll = async (req, res) => {
    const { cordenates } = req.query;
    let result;
    try {
      if (cordenates) {
        const cordenates = [];
        const direcciones = await this.dbModel.getDirecciones();
        for (const d of direcciones) {
          const { name, lat, lon } = await geocodeDireccion(
            d.direccion,
            d.jurisdiccion,
            d.cp
          );
          cordenates.push({ name, lat, lon });
        }
        result = cordenates;
      } else {
        result = await this.dbModel.getDirecciones();
      }
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
