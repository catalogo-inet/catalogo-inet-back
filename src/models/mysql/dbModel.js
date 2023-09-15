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
}
