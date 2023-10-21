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

  // static async getDirecciones() {
  //   const [response] = await pool.query(
  //     "SELECT TRIM(BOTH ' ' FROM REPLACE(d.direccion, '\t', '')) AS direccion,  TRIM(BOTH ' ' FROM REPLACE(i.Nombre, '\t', '')) AS institucion, TRIM(BOTH ' ' FROM REPLACE(j.Descripcion, '\t', '')) AS jurisdiccion, TRIM(BOTH ' ' FROM REPLACE(l.Descripcion, '\t', '')) AS localidad,  FROM direcciones AS d LEFT JOIN instituciones AS i ON d.instit_id = i.Instit_id LEFT JOIN jurisdicciones AS j ON d.jurisdiccion_id = j.Id LEFT JOIN localidades AS l ON d.localidad_id = l.Id;"
  //   );
  //   return response;
  // }

  static async getDirecciones(oferta_id) {
    const [response] = await pool.query(
      "SELECT TRIM('\t ' FROM TRIM('\t' FROM `instituciones`.`Nombre`)) AS `nombre`, `direcciones`.`direccion` AS `direccion`, `direcciones`.`cp` AS `cPostal`, TRIM('\t ' FROM TRIM('\t' FROM `localidades`.`Descripcion`)) AS `localidad`, `jurisdicciones`.`Descripcion` AS `provincia` FROM `direcciones` JOIN `instituciones` ON `direcciones`.`instit_id` = `instituciones`.`Instit_Id` JOIN `jurisdicciones` ON `direcciones`.`jurisdiccion_id` = `jurisdicciones`.`Id` JOIN `localidades` ON `direcciones`.`localidad_id` = `localidades`.`Id` JOIN `contactos` ON `instituciones`.`Instit_Id` = `contactos`.`instit_id` GROUP BY instituciones.Nombre;"
    );
    return response;
  }
}

