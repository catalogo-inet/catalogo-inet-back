import { createApp } from "./app.js";
import { DepartamentoModel } from "./models/mysql/despartamento.js";

createApp({ departamentoModel: DepartamentoModel });
