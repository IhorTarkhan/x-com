package net.lafox.ihor.backend.exception.unauthorized_401;

public class UnauthorizedException extends RuntimeException {
  public UnauthorizedException(String message) {
    super(message);
  }
}
