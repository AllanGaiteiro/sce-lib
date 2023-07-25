// lib/repository/repository-creator.js
import shell from 'shelljs';
import { repositoryTemplate } from './repository.template.js';

export class RepositoryCreator {
  static createRepository(className) {
    const repoTemplate = repositoryTemplate(className);
    const repoDirPath = `src/dataacess/repositories/${className}/`;
    const repoFileName = `${className}.repository.ts`;

    shell.mkdir('-p', repoDirPath);
    shell.touch(`${repoDirPath}${repoFileName}`);
    shell.ShellString(repoTemplate).to(`${repoDirPath}${repoFileName}`);
    console.log(`Repositório ${className} criado com sucesso!`);
  }
}