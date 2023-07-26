// lib/entity/entity-creator.js
import { FileLib } from "../file.lib.js";
import { instaceTemplate } from "./instance.template.js";

export class InstanceLib extends FileLib {
  static path = "src/common/handlers/factories/";
  static fileType = 'factory.ts';

  static createInstance() {
    this.createClassInstance('instance');
    console.log(`Instance Common criada com sucesso!`);
  }

  static createClassInstance(className) {
    const str = instaceTemplate;
    const dirPath = this.path;
    const fileName = `${className.toLocaleLowerCase()}.${this.fileType}`;

    this.createFile(dirPath, fileName, str);
  }
}
