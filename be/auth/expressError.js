class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

class NotFoundError extends ExpressError {
  constructor(message = "Not Found Error") {
    super(message, 404);
  }
}


class UnauthorizedError extends ExpressError {
  constructor(message = "Unauthorized Error") {
    super(message, 401);
  }
}


class BadRequestError extends ExpressError {
  constructor(message = "Bad Request Error") {
    super(message, 400);
  }
}


class ForbiddenError extends ExpressError {
  constructor(message = "Bad Request Error") {
    super(message, 403);
  }
}

module.exports = {
  ExpressError,
  NotFoundError,
  UnauthorizedError,
  BadRequestError,
  ForbiddenError,
};
