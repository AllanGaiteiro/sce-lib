export const repositoryTemplate = (
  className
) => `import { ${className}Entity } from "../../../domain/entities/${className}/${className}.entity";

export class ${className}Repository {
  findById(id: string) {
    // Implemente o método findById aqui...
  }

  findAll() {
    // Implemente o método findAll aqui...
  }

  create${className}(data: ${className}Entity) {
    // Implemente o método create${className} aqui...
  }

  update${className}(id: string, data: ${className}Entity) {
    // Implemente o método update${className} aqui...
  }

  delete${className}(id: string) {
    // Implemente o método delete${className} aqui...
  }
}`;
