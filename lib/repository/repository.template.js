import { formatFileFolder, formatFileName } from "../utils/utilsStr.js";

// Parte 1: Imports necessários
const repositoryImports = (className) => `
import { ${className}Entity } from "../../../domains/entities/${formatFileFolder(
  className
)}/${formatFileName(className)}.entity";
`;

// Parte 2: Escopo da classe
const repositoryClassScope = (className, entityMethods) => `
export class ${className}Repository {
  ${entityMethods}
}`;

// Parte 3: Métodos
const repositoryMethods = (className) => `
  findById(id: string): Promise<${className}Entity> {
    // Implemente o método findById aqui...
    throw new Error("Not Implemented o método findById");
  }

  findAll(): Promise<${className}Entity[]> {
    // Implemente o método findAll aqui...
    throw new Error("Not Implemente o método findAll");
  }

  create${className}(data: ${className}Entity): Promise<boolean> {
    // Implemente o método create${className} aqui...
    throw new Error("Not Implemented o método create${className}");
  }

  update${className}(id: string, data: ${className}Entity): Promise<boolean> {
    // Implemente o método update${className} aqui...
    throw new Error("Not Implemente o método update${className}");
  }

  delete${className}(id: string): Promise<boolean> {
    // Implemente o método delete${className} aqui...
    throw new Error("Not Implemente o método delete${className}");
  }`;

// Função para gerar o template completo
export const repositoryTemplate = (className) => `
${repositoryImports(className)}
${repositoryClassScope(className, repositoryMethods(className))}
`;
