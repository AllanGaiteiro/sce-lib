export const serviceDALTemplate = (
  className
) => `
import { ${className}Entity } from "../../../domains/entities/${className.toLocaleLowerCase()}/${className.toLocaleLowerCase()}.entity";
import { ${className}Repository } from "../../repositories/${className.toLocaleLowerCase()}/${className.toLocaleLowerCase()}.repository";
import { I${className}ServiceDAL } from "./${className.toLocaleLowerCase()}.service.interface";

export class ${className}ServiceDAL implements I${className}ServiceDAL {
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
  }
}`;
