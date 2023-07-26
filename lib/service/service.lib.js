// lib/repository/repository-creator.js
import { FileLib } from "../file.lib.js";
import { InstanceLib } from "../instance/instance.lib.js";
import { RepositoryLib } from "../repository/repository.lib.js";
import { serviceIndexTemplate } from "./templates/index.template.js";
import * as serviceDALInterfaceTemplate from "./templates/service-dal-interface.template.js";
import * as serviceDALTemplate from "./templates/service-dal.template.js";
import * as serviceTemplate from "./templates/service.template.js";

export class ServiceLib extends FileLib {
  static pathDAL = "src/dataacess/services/";
  static path = "src/domains/services/";
  static fileType = "service.ts";

  static createService(className) {
    this.createInstanceEntityRepository(className);
    this.createClassService(className);
    this.createInterfaceServiceDAL(className);
    this.createClassServiceDAL(className);
    this.createIndex(className);

    console.log(`Service ${className} criado com sucesso!`);
  }

  static createInstanceEntityRepository(className) {
    InstanceLib.createInstance(className);
    RepositoryLib.createRepository(className);
  }

  static createClassServiceDAL(className) {
    const str = serviceDALTemplate.serviceDALTemplate(className);
    this.createServiceFile(className, str, this.pathDAL);
    console.log(`Service ${className} Data Acess criado com sucesso!`);
  }

  static createClassService(className) {
    const str = serviceTemplate.serviceTemplate(className);
    this.createServiceFile(className, str, this.path);
    console.log(`Service ${className} Domain criado com sucesso!`);
  }

  static createInterfaceServiceDAL(className) {
    const str =
      serviceDALInterfaceTemplate.serviceDALInterfaceTemplate(className);
    const fileName = `${className.toLocaleLowerCase()}.service.interface.ts`;
    this.createFile(
      this.pathDAL + className.toLocaleLowerCase() + "/",
      fileName,
      str
    );
    console.log(
      `Service ${className} Interface Data Acess criado com sucesso!`
    );
  }

  static createIndex(className) {
    const str = serviceIndexTemplate(className);
    const fileName = "index.ts";
    this.createFile(
      this.pathDAL + className.toLocaleLowerCase() + "/",
      fileName,
      str
    );
    console.log(`Service ${className} Index criado com sucesso!`);
  }

  static updateServiceWithRepositoryMethods = (className, methods) => {
    this.updateClassServiceDAL(className, methods);
    this.updateClassService(className, methods);
    this.updateInterfaceServiceDAL(className, methods);
  };

  static updateClassServiceDAL(className, methods) {
    const serviceCode = methods
      .map(
        (method) => `
  ${method.name}(${this.getMethodParams(method)}): ${method.returnType} {
    return new ${className}Repository().${method.name}(${this.getParams(
          method
        )});  
  }
        `
      )
      .join("\n");

    const str = `
      ${serviceDALTemplate.serviceImports(className)}
      ${serviceDALTemplate.serviceDALClassScope(className, serviceCode)}
      `;
    this.createServiceFile(className, str, this.pathDAL);
  }

  static updateClassService(className, methods) {
    const serviceCode = methods
      .map(
        (method) => `
  ${method.name}(${this.getMethodParams(method)}): ${method.returnType} {
    return ${className.toLocaleLowerCase()}DI.instance.${
          method.name
        }(${this.getParams(method)});  
  }
        `
      )
      .join("\n");

    const str = `
      ${serviceTemplate.serviceImports(className)}
      ${serviceTemplate.serviceClassScope(className, serviceCode)}
      `;
    this.createServiceFile(className, str, this.path);
  }

  static updateInterfaceServiceDAL(className, methods) {
    const serviceCode = methods
      .map(
        (method) => `
  ${method.name}(${this.getMethodParams(method)}): ${method.returnType};`
      )
      .join("\n");

    const str = `
      ${serviceDALInterfaceTemplate.serviceImports(className)}
      ${serviceDALInterfaceTemplate.serviceClassScope(className, serviceCode)}
      `;

    const fileName = `${className.toLocaleLowerCase()}.service.interface.ts`;
    this.createFile(
      this.pathDAL + className.toLocaleLowerCase() + "/",
      fileName,
      str
    );
  }

  static getMethodParams(method) {
    return method.parameters.map((d) => `${d.name}: ${d.type}`).join(", ");
  }

  static getParams(method) {
    return method.parameters.map((d) => d.name).join(", ");
  }

  static createServiceFile(className, content, basePath) {
    const dirPath = basePath + className.toLocaleLowerCase() + "/";
    const fileName = `${className.toLocaleLowerCase()}.${this.fileType}`;
    this.createFile(dirPath, fileName, content);
  }
}
