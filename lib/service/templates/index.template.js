export const serviceIndexTemplate = (
  className
) => `
import { ${className}ServiceDAL } from "./${className.toLocaleLowerCase()}.service";
import { I${className}ServiceDAL } from "./${className.toLocaleLowerCase()}.service.interface";
import { getServiceInstance } from "../../../common/handlers/factories/instance.factory";

const services = {
  ${className.toLocaleLowerCase()}Interface: null as I${className}ServiceDAL | null,
};

/**
 * ${className} Dependency Injection
 */
export const ${className.toLocaleLowerCase()}DI = {
  /**
   * @return {${className}ServiceDAL}
   */
  get instance(): I${className}ServiceDAL {
    return getServiceInstance(services.${className.toLocaleLowerCase()}Interface, ${className}ServiceDAL);
  },
};`;
