// lib/entity/entity-creator.js
import { FileLib } from "../file.lib.js";
import { errorTemplate } from "./error.template.js";

export class ErrorLib extends FileLib {
  static createErrors() {
    const entityStr = errorTemplate;
    const entityDirPath = `src/common/handlers/errors/`;
    const entityFileName = `general-errors.handler.ts`;

    this.createFile(entityDirPath, entityFileName, entityStr);
    console.log(`Errors Common criada com sucesso!`);
  }
}
