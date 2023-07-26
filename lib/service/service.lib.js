// lib/repository/repository-creator.js
import { EntityLib } from "../entity/entity.lib.js";
import { FileLib } from "../file.lib.js";
import { InstanceLib } from "../instance/instance.lib.js";
import { RepositoryLib } from "../repository/repository.lib.js";
import { serviceIndexTemplate } from "./templates/index.template.js";
import * as serviceInterface from "./templates/service-dal-interface.template.js";
import * as serviceDAL from "./templates/service-dal.template.js";
import * as serviceDI from "./templates/service.template.js";

export class ServiceLib extends FileLib {
  static pathDAL = "src/dataacess/services/";
  static path = "src/domains/services/";
  static fileType = "service.ts";

  static createService(className) {
    InstanceLib.createInstance();
    EntityLib.createEntity(className);
    RepositoryLib.createRepository(className);
    this.createClassService(className);
    this.createInterfaceServiceDAL(className);
    this.createClassServiceDAL(className);
    this.createIndex(className);

    console.log(`Service ${className} criado com sucesso!`);
  }

  static createClassServiceDAL(className) {
    const str = serviceDAL.serviceDALTemplate(className);
    const dirPath = this.pathDAL + className.toLocaleLowerCase() + "/";
    const fileName = `${className.toLocaleLowerCase()}.${this.fileType}`;

    this.createFile(dirPath, fileName, str);
    console.log(`Service ${className} Data Acess criado com sucesso!`);
  }

  static createClassService(className) {
    const str = serviceTemplate(className);
    const dirPath = this.path + className.toLocaleLowerCase() + "/";
    const fileName = `${className.toLocaleLowerCase()}.${this.fileType}`;

    this.createFile(dirPath, fileName, str);
    console.log(`Service ${className} Domain criado com sucesso!`);
  }

  static createInterfaceServiceDAL(className) {
    const str = serviceDALInterfaceTemplate(className);
    const dirPath = this.pathDAL + className.toLocaleLowerCase() + "/";
    const fileName = `${className.toLocaleLowerCase()}.service.interface.ts`;

    this.createFile(dirPath, fileName, str);
    console.log(
      `Service ${className} Interface Data Acess criado com sucesso!`
    );
  }

  static createIndex(className) {
    const str = serviceIndexTemplate(className);
    const dirPath = this.pathDAL + className.toLocaleLowerCase() + "/";
    const fileName = `index.ts`;

    this.createFile(dirPath, fileName, str);
    console.log(`Service ${className} Index criado com sucesso!`);
  }

  static updateServiceWithRepositoryMethods = (className, methods) => {
    /*
    {
    name: 'findById',
    parameters: [ [Object] ],
    returnType: 'Promise<import("/home/allangaiteiro/projects/sce-lib/src/domains/entities/opportunity/opportunity.entity").OpportunityEntity>'
  },
    */
    this.updateClassServiceDAL(className, methods);
    this.updateClassService(className, methods);
    this.updateInterfaceServiceDAL(className, methods);
  };

  static updateClassServiceDAL(className, methods) {
    let serviceCode = "";

    for (const method of methods) {
      const methodParams = `${method.parameters
        .map((d) => `${d.name}: ${d.type}`)
        .join(", ")}`;
      const params =
        `${method.parameters.map((d) => `${d.name}`).join(", ")}` || "";
      const methodCode = `
  ${method.name}(${methodParams}): ${method.returnType} {
    return new ${className}Repository().${method.name}(${params});  
  }
        `;
      serviceCode += methodCode;
    }

    const str = `
      ${serviceDAL.serviceImports(className)}
      ${serviceDAL.serviceDALClassScope(className, serviceCode)}
      `;
    const dirPath = this.pathDAL + className.toLocaleLowerCase() + "/";
    const fileName = `${className.toLocaleLowerCase()}.${this.fileType}`;

    this.createFile(dirPath, fileName, str);
  }

  static updateClassService(className, methods) {
    let serviceCode = "";

    for (const method of methods) {
      const methodParams = `${method.parameters
        .map((d) => `${d.name}: ${d.type}`)
        .join(", ")}`;
      const params =
        `${method.parameters.map((d) => `${d.name}`).join(", ")}` || "";
      const methodCode = `
  ${method.name}(${methodParams}): ${method.returnType} {
    return ${className.toLocaleLowerCase()}DI.instance.${
        method.name
      }(${params});  
  }
        `;
      serviceCode += methodCode;
    }

    const str = `
      ${serviceDI.serviceImports(className)}
      ${serviceDI.serviceClassScope(className, serviceCode)}
      `;
    const dirPath = this.path + className.toLocaleLowerCase() + "/";
    const fileName = `${className.toLocaleLowerCase()}.${this.fileType}`;

    this.createFile(dirPath, fileName, str);
  }

  static updateInterfaceServiceDAL(className, methods) {
    let serviceCode = "";

    for (const method of methods) {
      const methodParams = `${method.parameters
        .map((d) => `${d.name}: ${d.type}`)
        .join(", ")}`;
      const methodCode = `
  ${method.name}(${methodParams}): ${method.returnType};`;
      serviceCode += methodCode;
    }

    const str = `
      ${serviceInterface.serviceImports(className)}
      ${serviceInterface.serviceClassScope(className, serviceCode)}
      `;

    const dirPath = this.pathDAL + className.toLocaleLowerCase() + "/";
    const fileName = `${className.toLocaleLowerCase()}.service.interface.ts`;

    this.createFile(dirPath, fileName, str);
  }
}
