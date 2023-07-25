export const repositoryTemplate = (
  className
) => `import { ${className}Entity } from "../../../domain/entities/${className.toLocaleLowerCase()}/${className.toLocaleLowerCase()}.entity";

export class ${className}Repository {
  findById(id: string): Promise<${className}Entity> {
    // Implemente o método findById aqui...
  }

  findAll(): Promise<${className}Entity[]> {
    // Implemente o método findAll aqui...
  }

  create${className}(data: ${className}Entity): Promise<boolean> {
    // Implemente o método create${className} aqui...
  }

  update${className}(id: string, data: ${className}Entity): Promise<boolean> {
    // Implemente o método update${className} aqui...
  }

  delete${className}(id: string): Promise<boolean> {
    // Implemente o método delete${className} aqui...
  }
}`;
