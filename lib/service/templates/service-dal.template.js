import { formatFileFolder, formatFileName } from "../../utils/utilsStr.js";

// Parte 1: Imports necessários
export const serviceImports = (className) => `
import { ${className}Entity } from "../../../domains/entities/${formatFileFolder(
  className
)}/${formatFileName(className)}.entity";
import { ${className}Repository } from "../../repositories/${formatFileFolder(
  className
)}/${formatFileName(className)}.repository";
import { I${className}ServiceDAL } from "./${formatFileName(
  className
)}.service.interface";`;

// Parte 2: Escopo da classe
export const serviceDALClassScope = (className, entityMethods) => `
export class ${className}ServiceDAL implements I${className}ServiceDAL {
  ${entityMethods}
}`;

// Parte 3: Métodos
export const serviceMethods = (className) => `
  findById(id: string): Promise<${className}Entity> {
    return new ${className}Repository().findById(id);  
  }

  findAll(): Promise<${className}Entity[]> {
    return new ${className}Repository().findAll();  
  }

  create${className}(data: ${className}Entity): Promise<boolean> {
    return new ${className}Repository().create${className}(data);  
  }

  update${className}(id: string, data: ${className}Entity): Promise<boolean> {
    return new ${className}Repository().update${className}(id,data);  
  }

  delete${className}(id: string): Promise<boolean> {
    return new ${className}Repository().delete${className}(id);  
  }`;

// Função para gerar o template completo
export const serviceDALTemplate = (className) => `
${serviceImports(className)}
${serviceDALClassScope(className, serviceMethods(className))}
`;
