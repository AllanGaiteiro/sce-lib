// Parte 1: Imports necessários
const controllerImports = (className) => `
import { ${className}Entity } from "../../../domains/entities/${className.toLocaleLowerCase()}/${className.toLocaleLowerCase()}.entity";
import { ${className}Service } from "../../../domains/services/${className.toLocaleLowerCase()}/${className.toLocaleLowerCase()}.service";
import { BadRequest, InternalError } from "../../../common/handlers/errors/general-errors.handler";
import { Request, Response } from "express";
`;

// Parte 2: Escopo da classe
const controllerClassScope = (className,controllerMethods) => `
export class ${className}Controller  {
  ${controllerMethods}
}`;

// Parte 3: Métodos
const controllerMethods = (className) => `
  findById(request: Request, response: Response) {
    if (!request.params || !request.params.id) {
      const error = new BadRequest('Request body data not found.');
      response.status(error.status).json({ error: error.response });
    } else {
      return new ${className}Service().findById(request.params.id)
        .then((responseData) => {
          response.json({ data: responseData });
        })
        .catch((error) => {
          console.error('An internal error has ocurred on find by id ${className.toLocaleLowerCase()}.', error);
          if (error instanceof InternalError) {
            response.status(error.status).json({ error: error.response });
          } else {
            const error = new InternalError('An internal unhandled error has ocurred on find by id ${className.toLocaleLowerCase()}.');
            response.status(error.status).json({ error: error.response });
          }
        });
    }  
  }

  findAll(request: Request, response: Response) {
    return new ${className}Service().findAll()
      .then((responseData) => {
        response.json({ data: responseData });
      })
      .catch((error) => {
        console.error('An internal error has ocurred on update an ${className.toLocaleLowerCase()}.', error);
        if (error instanceof InternalError) {
          response.status(error.status).json({ error: error.response });
        } else {
          const error = new InternalError('An internal unhandled error has ocurred on update an ${className.toLocaleLowerCase()}.');
          response.status(error.status).json({ error: error.response });
        }
      });  
  }

  create${className}(request: Request, response: Response) {
    if (!request.body || !request.body.data || !request.body.data.uid) {
      const error = new BadRequest('Request body data not found.');
      response.status(error.status).json({ error: error.response });
    } else {
      const requestData = Object.assign(new ${className}Entity(), request.body.data);
      return new ${className}Service().create${className}(requestData) 
        .then((responseData) => {
          response.json({ data: responseData });
        })
        .catch((error) => {
          console.error('An internal error has ocurred on create an ${className.toLocaleLowerCase()}.', error);
          if (error instanceof InternalError) {
            response.status(error.status).json({ error: error.response });
          } else {
            const error = new InternalError('An internal unhandled error has ocurred on create ${className.toLocaleLowerCase()}.');
            response.status(error.status).json({ error: error.response });
          }
        });
    }
  }

  update${className}(request: Request, response: Response) {
    if (!request.body || !request.body.data || !request.body.data.uid) {
      const error = new BadRequest('Request body data not found.');
      response.status(error.status).json({ error: error.response });
    }else if (!request.params || !request.params.id) {
      const error = new BadRequest('Request params not found.');
      response.status(error.status).json({ error: error.response });
    } else {
      const requestData = Object.assign(new ${className}Entity(), request.body.data);
      return new ${className}Service().update${className}(request.params.id,requestData)
        .then((responseData) => {
          response.json({ data: responseData });
        })
        .catch((error) => {
          console.error('An internal error has ocurred on update an ${className.toLocaleLowerCase()}.', error);
          if (error instanceof InternalError) {
            response.status(error.status).json({ error: error.response });
          } else {
            const error = new InternalError('An internal unhandled error has ocurred on update an ${className.toLocaleLowerCase()}.');
            response.status(error.status).json({ error: error.response });
          }
        });  
    }
  }

  delete${className}(request: Request, response: Response) {
    if (!request.params || !request.params.id) {
      const error = new BadRequest('Request param not found.');
      response.status(error.status).json({ error: error.response });
    } else { 
      return new ${className}Service().delete${className}(request.params.id)
        .then((responseData) => {
          response.json({ data: responseData });
        })
        .catch((error) => {
          console.error('An internal error has ocurred on delete an ${className.toLocaleLowerCase()}.', error);
          if (error instanceof InternalError) {
            response.status(error.status).json({ error: error.response });
          } else {
            const error = new InternalError('An internal unhandled error has ocurred on delete an ${className.toLocaleLowerCase()}.');
            response.status(error.status).json({ error: error.response });
          }
        });  
    }
  }
`;


// Função para gerar o template completo
export const controllerTemplate = (className) => `
${controllerImports(className)}
${controllerClassScope(className,controllerMethods(className))}
`;