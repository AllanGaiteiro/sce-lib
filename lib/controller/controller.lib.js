// lib/repository/repository-creator.js
import { ErrorLib } from "../error/error.lib.js";
import { FileLib } from "../file.lib.js";
import { ServiceLib } from "../service/service.lib.js";
import { controllerTemplate } from "./controller.template.js";

export class ControllerLib extends FileLib {
  static path = "src/servers/controllers/";
  static fileType = 'controller.ts';

  static createController(className) {
    ServiceLib.createService(className);
    ErrorLib.createErrors(className);
    this.createClassController(className);

    console.log(`Controller ${className} criado com sucesso!`);
  }

  static createClassController(className) {
    const str = controllerTemplate(className);
    const dirPath = this.path + className.toLocaleLowerCase() + "/";
    const fileName = `${className.toLocaleLowerCase()}.${this.fileType}`;

    this.createFile(dirPath, fileName, str);
  }
}
