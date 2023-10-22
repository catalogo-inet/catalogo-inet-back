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
}
