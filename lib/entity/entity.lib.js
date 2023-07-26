// lib/entity/entity-creator.js
import { FileLib } from "../file.lib.js";
import { formatFileFolder, formatFileName } from "../utils/utilsStr.js";
import { entityTemplate } from "./entity.template.js";

export class EntityLib extends FileLib {
  static path = "src/domains/entities/";
  static fileType = "entity.ts";

  static createEntity(className) {
    this.createClassEntity(className);

    console.log(`Entity ${className} criada com sucesso!`);
  }

  static createClassEntity(className) {
    const str = entityTemplate(className);
    const dirPath = this.path + formatFileFolder(className) + "/";
    const fileName = `${formatFileName(className)}.${this.fileType}`;

    this.createFile(dirPath, fileName, str);
  }
}
