export const serviceTemplate = (
  className
) => `
import { ${className}Entity } from "../../../domains/entities/${className.toLocaleLowerCase()}/${className.toLocaleLowerCase()}.entity";
import { ${className.toLocaleLowerCase()}DI } from "../../../dataacess/services/${className.toLocaleLowerCase()}";

export class ${className}Service {
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
  }
}`;
