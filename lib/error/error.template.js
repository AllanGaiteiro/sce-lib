export const errorTemplate = `
export class InternalError extends Error {
  status: number;
  get response() {
    return {
      name: this.name,
      message: this.message,
    };
  };

  constructor(message: string, name = "error-internal") {
    super(message);
    super.name = name;
    this.status = 500;
  }
}

export class NotFound extends InternalError {
  constructor(message: string, name = "error-not-found") {
    super(message, name);
    super.status = 404;
  }
}

export class BadRequest extends InternalError {
  constructor(message: string, name = "error-bad-request") {
    super(message, name);
    super.status = 400;
  }
}

export class UnauthorizedError extends InternalError {
  constructor(message: string, name = "error-unauthorized") {
    super(message, name);
    super.status = 401;
  }
}

`;
