// lib/entity/entity-creator.js
import { FileLib } from "../file.lib.js";
import { errorTemplate } from "./error.template.js";

export class ErrorLib extends FileLib {
  static path = "src/common/handlers/errors/";
  static fileType = 'handler.ts';

  static createErrors() {
    this.createClassErrors('general-errors');

    console.log(`Errors Common criada com sucesso!`);
  }

  static createClassErrors(className) {
    const str = errorTemplate;
    const dirPath = this.path;
    const fileName = `${className.toLocaleLowerCase()}.${this.fileType}`;

    this.createFile(dirPath, fileName, str);
  }
}
