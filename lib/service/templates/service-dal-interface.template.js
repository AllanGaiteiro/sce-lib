// Parte 1: Imports necessários
export const serviceImports = (className) => `
import { ${className}Entity } from "../../../domains/entities/${className.toLocaleLowerCase()}/${className.toLocaleLowerCase()}.entity";
`;

// Parte 2: Escopo da classe
export const serviceClassScope = (className,entityMethods) => `
export interface I${className}ServiceDAL {
  ${entityMethods}
}`;

// Parte 3: Métodos
export const serviceMethods = (className) => 
` findById(id: string): Promise<${className}Entity>;
  findAll(): Promise<${className}Entity[]>;
  create${className}(data: ${className}Entity): Promise<boolean>;
  update${className}(id: string, data: ${className}Entity): Promise<boolean>;
  delete${className}(id: string): Promise<boolean>;
`;


// Função para gerar o template completo
export const serviceDALInterfaceTemplate = (className) => `
${serviceImports(className)}
${serviceClassScope(className,serviceMethods(className))}
`;