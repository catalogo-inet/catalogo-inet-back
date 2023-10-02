import { pool } from "../../db.js";

export class MySqlModel {
  static async getDepartamentos() {
    const [response] = await pool.query("SELECT * FROM departamentos");
    return response;
  }

  static async getDepartamentoById({ idDepartamento }) {
    const [response] = await pool.query(
      "SELECT * FROM departamentos WHERE Id = ?",
      [idDepartamento]
    );
    return response;
  }

  static async getSectores() {
    const [response] = await pool.query("SELECT * FROM sectores");
    return response;
  }

  static async getOfertas() {
    const [response] = await pool.query("SELECT * FROM ofertas");
    return response;
  }

  static async getContactos() {
    const [response] = await pool.query("SELECT * FROM contactos");
    return response;
  }

  static async getDirecciones() {
    const [response] = await pool.query(
      "SELECT TRIM(BOTH ' ' FROM REPLACE(d.direccion, '\t', '')) AS direccion,  TRIM(BOTH ' ' FROM REPLACE(i.Nombre, '\t', '')) AS institucion, TRIM(BOTH ' ' FROM REPLACE(j.Descripcion, '\t', '')) AS jurisdiccion, TRIM(BOTH ' ' FROM REPLACE(l.Descripcion, '\t', '')) AS localidad,  FROM direcciones AS d LEFT JOIN instituciones AS i ON d.instit_id = i.Instit_id LEFT JOIN jurisdicciones AS j ON d.jurisdiccion_id = j.Id LEFT JOIN localidades AS l ON d.localidad_id = l.Id;"
    );
    return response;
  }
}
