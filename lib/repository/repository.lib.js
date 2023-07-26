// lib/repository/repository-creator.js
import fs from "fs";
import { Project } from "ts-morph";
import { EntityLib } from "../entity/entity.lib.js";
import { FileLib } from "../file.lib.js";
import { formatFileFolder, formatFileName } from "../utils/utilsStr.js";
import { repositoryTemplate } from "./repository.template.js";

export class RepositoryLib extends FileLib {
  static path = "src/dataacess/repositories/";
  static fileType = "repository.ts";

  static createRepository(className) {
    EntityLib.createEntity(className);
    this.createClassRepository(className);

    console.log(`Repositório ${className} criado com sucesso!`);
  }

  static createClassRepository(className) {
    const str = repositoryTemplate(className);
    const dirPath = this.path + formatFileFolder(className) + "/";
    const fileName = `${formatFileName(className)}.${this.fileType}`;

    this.createFile(dirPath, fileName, str);
  }

  static validateRepositoryAndGenerateMethods = (className) => {
    const repositoryPath =
      this.path +
      formatFileFolder(className) +
      "/" +
      `${formatFileName(className)}.${this.fileType}`;

    if (!fs.existsSync(repositoryPath)) {
      throw new Error(`Repository file for class ${className} not found.`);
    }

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(repositoryPath);
    const classDeclaration = sourceFile.getClassOrThrow(
      className + "Repository"
    );

    const methods = classDeclaration.getMethods().map((method) => {
      const parameters = method.getParameters().map((param) => ({
        name: param.getName(),
        type: this.formatType(param.getType().getText()),
      }));

      const returnType = this.formatType(method.getReturnType().getText());
      return {
        name: method.getName(),
        parameters,
        returnType,
      };
    });

    return methods;
  };

  static formatType(returnType) {
    const entityImportRegex = /import\(".*\/(.*)"\)\.(.*)/;
    const match = entityImportRegex.exec(returnType);

    if (match) {
      if (returnType.indexOf("Promise<") >= 0) {
        returnType = "Promise<";
      } else {
        returnType = "";
      }
      returnType += match[match.length - 1];
    }
    return returnType;
  }
}
