import { pool } from "../../db.js";

export class DepartamentoModel {
  static async getAll() {
    const [response] = await pool.query("SELECT * FROM departamentos");
    return response;
  }

  static async getById({ idDepartamento }) {
    const [response] = await pool.query(
      "SELECT * FROM departamentos WHERE Id = ?",
      [idDepartamento]
    );
    return response;
  }
}
