export const instaceTemplate = `
/**
 *
 * @param {T} serviceInterface
 * @param {T} ServiceClass
 * @return {T}
 */
export function getServiceInstance<T>(serviceInterface: T | null, ServiceClass: new () => T): T {
  if (!serviceInterface) {
    return new ServiceClass();
  } else {
    return serviceInterface;
  }
};

`;
