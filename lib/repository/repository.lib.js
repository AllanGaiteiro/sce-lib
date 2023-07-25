// lib/repository/repository-creator.js
import { EntityLib } from "../entity/entity.lib.js";
import { FileLib } from "../file.lib.js";
import { repositoryTemplate } from "./repository.template.js";

export class RepositoryLib extends FileLib {
  static createRepository(className) {
    EntityLib.createEntity(className);
    this.createClassRepository(className);
    
    console.log(`Repositório ${className} criado com sucesso!`);
  }

  static createClassRepository(className) {
    const repoStr = repositoryTemplate(className);
    const repoDirPath = `src/dataacess/repositories/${className.toLocaleLowerCase()}/`;
    const repoFileName = `${className.toLocaleLowerCase()}.repository.ts`;

    this.createFile(repoDirPath, repoFileName, repoStr);
  }
}
