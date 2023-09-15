import { createApp } from "./app.js";
import { MySqlModel } from "./models/mysql/dbModel.js";

createApp({ dbModel: MySqlModel });
