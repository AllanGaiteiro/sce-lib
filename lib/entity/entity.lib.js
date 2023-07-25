// lib/entity/entity-creator.js
import { FileLib } from "../file.lib.js";
import { entityTemplate } from "./entity.template.js";

export class EntityLib extends FileLib {
  static createEntity(className) {
    const entityStr = entityTemplate(className);
    const entityDirPath = `src/domains/entities/${className.toLocaleLowerCase()}/`;
    const entityFileName = `${className.toLocaleLowerCase()}.entity.ts`;

    this.createFile(entityDirPath, entityFileName, entityStr);
    console.log(`Entity ${className} criada com sucesso!`);
  }
}
