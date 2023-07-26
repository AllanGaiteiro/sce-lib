// Parte 1: Imports necessários
const entityImports = (className) => ``;

// Parte 2: Escopo da classe
const entityClassScope = (className,entityMethods) => `
export class ${className}Entity  {
  id: string;
  ${entityMethods}
}`;

// Parte 3: Métodos
const entityMethods = (className) => ``;


// Função para gerar o template completo
export const entityTemplate = (className) => `
${entityImports(className)}
${entityClassScope(className,entityMethods(className))}
`;
