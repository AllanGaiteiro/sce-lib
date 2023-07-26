import { formatFileFolder, formatFileName } from "../../utils/utilsStr.js";

// Parte 1: Imports necessários
export const serviceImports = (className) => `
import { ${className}Entity } from "../../../domains/entities/${formatFileFolder(
  className
)}/${formatFileName(className)}.entity";
import { ${className.toLocaleLowerCase()}DI } from "../../../dataacess/services/${formatFileName(
  className
)}";
`;

// Parte 2: Escopo da classe
export const serviceClassScope = (className, entityMethods) => `
export class ${className}Service {
  ${entityMethods}
}`;

// Parte 3: Métodos
export const serviceMethods = (className) => `
  findById(id: string): Promise<${className}Entity> {
    return ${className.toLocaleLowerCase()}DI.instance.findById(id);  
  }

  findAll(): Promise<${className}Entity[]> {
    return ${className.toLocaleLowerCase()}DI.instance.findAll();  
  }

  create${className}(data: ${className}Entity): Promise<boolean> {
    return ${className.toLocaleLowerCase()}DI.instance.create${className}(data);  
  }

  update${className}(id: string, data: ${className}Entity): Promise<boolean> {
    return ${className.toLocaleLowerCase()}DI.instance.update${className}(id,data);  
  }

  delete${className}(id: string): Promise<boolean> {
    return ${className.toLocaleLowerCase()}DI.instance.delete${className}(id);  
  }`;

// Função para gerar o template completo
export const serviceTemplate = (className) => `
${serviceImports(className)}
${serviceClassScope(className, serviceMethods(className))}
`;
