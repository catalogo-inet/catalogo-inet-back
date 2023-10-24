import { geocodeDireccion } from "./geoDireccion.js";

export async function getInstitucionesCordenates({ instituciones }) {
  const response = [];
  for (const institucion of instituciones) {
    const { codigoPostal, direccion, jurisdiccion } = institucion;
    const cordenates = await geocodeDireccion({
      codigoPostal,
      direccion,
      jurisdiccion,
    });
    response.push({ ...institucion, lat: cordenates.lat, lon: cordenates.lon });
  }
  return response;
}
