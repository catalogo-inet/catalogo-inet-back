export async function geocodeDireccion(direccion, jurisdiccion, cp) {
  console.log({ direccion, jurisdiccion, cp });
  const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${direccion}, ${jurisdiccion}, ${cp}, Argentina`;
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
          `No se encontraron resultados para ${direccion}, ${jurisdiccion}.`
        );
      }
    } else {
      console.error(
        `Error al hacer la solicitud para ${direccion}, ${jurisdiccion}.`
      );
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
  return result;
}
