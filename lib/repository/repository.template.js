export const repositoryTemplate = (
  className
) => `import { ${className}Entity } from "../../../domains/entities/${className.toLocaleLowerCase()}/${className.toLocaleLowerCase()}.entity";

export class ${className}Repository {
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
  }
}`;
