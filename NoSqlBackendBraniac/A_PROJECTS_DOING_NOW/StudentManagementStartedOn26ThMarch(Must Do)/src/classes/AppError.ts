export class AppError extends Error {
  public statusCode: number;
  constructor(message: string, code: number, stack = "") {
    super(message);
    this.statusCode = code;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
