import { pool } from "../../db.js";

export class MySqlModel {
  static async getDirecciones() {
    const [response] = await pool.query(
      "SELECT TRIM('\t ' FROM TRIM('\t' FROM `instituciones`.`Nombre`)) AS `nombre`, `direcciones`.`direccion` AS `direccion`, `direcciones`.`cp` AS `cPostal`, TRIM('\t ' FROM TRIM('\t' FROM `localidades`.`Descripcion`)) AS `localidad`, `jurisdicciones`.`Descripcion` AS `provincia` FROM `direcciones` JOIN `instituciones` ON `direcciones`.`instit_id` = `instituciones`.`Instit_Id` JOIN `jurisdicciones` ON `direcciones`.`jurisdiccion_id` = `jurisdicciones`.`Id` JOIN `localidades` ON `direcciones`.`localidad_id` = `localidades`.`Id` JOIN `contactos` ON `instituciones`.`Instit_Id` = `contactos`.`instit_id` GROUP BY instituciones.Nombre;"
    );
    return response;
  }

  static async getDireccion({ direccion }) {
    const [response] = await pool.query(
      "SELECT TRIM('\t ' FROM TRIM('\t' FROM `instituciones`.`Nombre`)) AS `nombre`, `direcciones`.`direccion` AS `direccion`, `direcciones`.`cp` AS `cPostal`, TRIM('\t ' FROM TRIM('\t' FROM `localidades`.`Descripcion`)) AS `localidad`, `jurisdicciones`.`Descripcion` AS `provincia` FROM `direcciones` JOIN `instituciones` ON `direcciones`.`instit_id` = `instituciones`.`Instit_Id` JOIN `jurisdicciones` ON `direcciones`.`jurisdiccion_id` = `jurisdicciones`.`Id` JOIN `localidades` ON `direcciones`.`localidad_id` = `localidades`.`Id` JOIN `contactos` ON `instituciones`.`Instit_Id` = `contactos`.`instit_id` WHERE `direcciones`.`direccion` = ? GROUP BY instituciones.Nombre;",
      [direccion]
    );
    return response;
  }

  static async getInstituciones() {
    const response = pool.query("SELECT * FROM instituciones");
    return response;
  }

  static async getInstitucion({ idInstitucion }) {
    const query =
      "SELECT i.Instit_Id AS id, i.Nombre AS nombre, i.Anio_Fundacion AS fundacion, GROUP_CONCAT(DISTINCT TRIM(',' FROM p.nombre)) AS orientaciones, d.direccion AS direccion, l.Descripcion AS localidad, d.cp AS codigoPostal , dep.Descripcion AS descripcion, j.Descripcion AS jurisdiccion , o.Nombre AS tipo, g.Descripcion AS gestion FROM instituciones AS i LEFT JOIN direcciones AS d ON i.Instit_Id = d.instit_id LEFT JOIN planes_estudio AS p ON i.Instit_Id = p.instit_Id LEFT JOIN ofertas AS o ON p.oferta_id = o.Id LEFT JOIN gestiones AS g ON i.Gestion_Id = g.Id LEFT JOIN localidades AS l ON d.localidad_id = l.Id LEFT JOIN departamentos AS dep ON d.departamento_id = dep.Id LEFT JOIN jurisdicciones AS j ON d.jurisdiccion_id = j.Id WHERE i.Instit_Id = ?;";
    const [response] = await pool.query(query, [idInstitucion]);
    return response;
  }

  static async getInstitucionesByCP({ codigoPostal }) {
    const query =
      "SELECT i.Instit_Id AS id, i.Nombre AS nombre, i.Anio_Fundacion AS fundacion, GROUP_CONCAT(DISTINCT TRIM(',' FROM p.nombre)) AS orientaciones, d.direccion AS direccion, l.Descripcion AS localidad, d.cp AS codigoPostal , dep.Descripcion AS descripcion, j.Descripcion AS jurisdiccion , o.Nombre AS tipo, g.Descripcion AS gestion FROM instituciones AS i LEFT JOIN direcciones AS d ON i.Instit_Id = d.instit_id LEFT JOIN planes_estudio AS p ON i.Instit_Id = p.instit_Id LEFT JOIN ofertas AS o ON p.oferta_id = o.Id LEFT JOIN gestiones AS g ON i.Gestion_Id = g.Id LEFT JOIN localidades AS l ON d.localidad_id = l.Id LEFT JOIN departamentos AS dep ON d.departamento_id = dep.Id LEFT JOIN jurisdicciones AS j ON d.jurisdiccion_id = j.Id WHERE d.cp = ?;";
    const response = pool.query(query, [codigoPostal]);
    return response;
  }

  static async filterInstituciones({ codigoPostal }) {
    const [response] = await pool.query(
      "SELECT * FROM direcciones WHERE cp = ?",
      [codigoPostal]
    );

    return response;
  }

  static async getJurisdicciones() {
    const [response] = await pool.query("SELECT * FROM jurisdicciones");
    return response;
  }

  static async getByJurisdiccion({ Jurisdiccion_Id }) {
    const [response] = await pool.query(
      "SELECT * FROM jurisdicciones WHERE Id = ?",
      [Jurisdiccion_Id]
    );
    return response;
  }
}
