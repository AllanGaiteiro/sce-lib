// lib/entity/entity-creator.js
import shell from 'shelljs';

export class EntityCreator {
  static createEntity(className) {
    const entityTemplate = `export class ${className}Entity {
  id: string;
}`;
    const entityDirPath = `src/domain/entities/${className}/`;
    const entityFileName = `${className}.entity.ts`;

    shell.mkdir('-p', entityDirPath);
    shell.touch(`${entityDirPath}${entityFileName}`);
    shell.ShellString(entityTemplate).to(`${entityDirPath}${entityFileName}`);
    console.log(`Classe Entity ${className}Entity criada com sucesso!`);
  }
}
