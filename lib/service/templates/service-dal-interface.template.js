export const serviceDALInterfaceTemplate = (
  className
) => `
import { ${className}Entity } from "../../../domains/entities/${className.toLocaleLowerCase()}/${className.toLocaleLowerCase()}.entity";

export interface I${className}ServiceDAL {
  findById(id: string): Promise<${className}Entity>;
  findAll(): Promise<${className}Entity[]>;
  create${className}(data: ${className}Entity): Promise<boolean>;
  update${className}(id: string, data: ${className}Entity): Promise<boolean>;
  delete${className}(id: string): Promise<boolean>;
}`;
