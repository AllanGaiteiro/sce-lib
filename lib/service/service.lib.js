// lib/repository/repository-creator.js
import { EntityLib } from "../entity/entity.lib.js";
import { FileLib } from "../file.lib.js";
import { InstanceLib } from "../instance/instance.lib.js";
import { RepositoryLib } from "../repository/repository.lib.js";
import { serviceIndexTemplate } from "./templates/index.template.js";
import { serviceDALInterfaceTemplate } from "./templates/service-dal-interface.template.js";
import { serviceDALTemplate } from "./templates/service-dal.template.js";
import { serviceTemplate } from "./templates/service.template.js";

export class ServiceLib extends FileLib {
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
    const serviceStr = serviceDALTemplate(className);
    const serviceDirPath = `src/dataacess/services/${className.toLocaleLowerCase()}/`;
    const serviceFileName = `${className.toLocaleLowerCase()}.service.ts`;

    this.createFile(serviceDirPath, serviceFileName, serviceStr);
    console.log(`Service ${className} Data Acess criado com sucesso!`);
  }

  static createClassService(className) {
    const serviceStr = serviceTemplate(className);
    const serviceDirPath = `src/domains/services/${className.toLocaleLowerCase()}/`;
    const serviceFileName = `${className.toLocaleLowerCase()}.service.ts`;

    this.createFile(serviceDirPath, serviceFileName, serviceStr);
    console.log(`Service ${className} Domain criado com sucesso!`);
  }

  static createInterfaceServiceDAL(className) {
    const serviceStr = serviceDALInterfaceTemplate(className);
    const serviceDirPath = `src/dataacess/services/${className.toLocaleLowerCase()}/`;
    const serviceFileName = `${className.toLocaleLowerCase()}.service.interface.ts`;

    this.createFile(serviceDirPath, serviceFileName, serviceStr);
    console.log(
      `Service ${className} Interface Data Acess criado com sucesso!`
    );
  }

  static createIndex(className) {
    const serviceStr = serviceIndexTemplate(className);
    const serviceDirPath = `src/dataacess/services/${className.toLocaleLowerCase()}/`;
    const serviceFileName = `index.ts`;

    this.createFile(serviceDirPath, serviceFileName, serviceStr);
    console.log(
      `Service ${className} Index criado com sucesso!`
    );
  }
}
