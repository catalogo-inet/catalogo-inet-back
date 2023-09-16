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
}
