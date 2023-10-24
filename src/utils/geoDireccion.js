export async function geocodeDireccion({
  direccion,
  codigoPostal,
  jurisdiccion,
}) {
  console.log({ direccion, codigoPostal });
  const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${direccion}, ${codigoPostal}, Argentina`;
  let result = {};
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      if (data.length > 0) {
        const locationData = data[0];
        result = locationData;
      } else {
        console.log(
          `No se encontraron resultados para ${direccion}, ${codigoPostal}.`
        );
      }
    } else {
      console.error(
        `Error al hacer la solicitud para ${direccion}, ${codigoPostal}.`
      );
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
  return result;
}
