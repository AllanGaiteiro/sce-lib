// lib/entity/entity-creator.js
import { FileLib } from "../file.lib.js";
import { instaceTemplate } from "./instance.template.js";

export class InstanceLib extends FileLib {
  static createInstance() {
    const entityStr = instaceTemplate;
    const entityDirPath = `src/common/handlers/factories/`;
    const entityFileName = `instance.factory.ts`;

    this.createFile(entityDirPath, entityFileName, entityStr);
    console.log(`Instance Common criada com sucesso!`);
  }
}
