// lib/repository/repository-creator.js
import { ErrorLib } from "../error/error.lib.js";
import { FileLib } from "../file.lib.js";
import { ServiceLib } from "../service/service.lib.js";
import { controllerTemplate } from "./controller.template.js";

export class ControllerLib extends FileLib {
  static createController(className) {
    ServiceLib.createService(className);
    ErrorLib.createErrors(className);
    this.createClassController(className);

    console.log(`Controller ${className} criado com sucesso!`);
  }

  static createClassController(className) {
    const repoStr = controllerTemplate(className);
    const repoDirPath = `src/servers/controllers/${className.toLocaleLowerCase()}/`;
    const repoFileName = `${className.toLocaleLowerCase()}.controller.ts`;

    this.createFile(repoDirPath, repoFileName, repoStr);
  }
}
