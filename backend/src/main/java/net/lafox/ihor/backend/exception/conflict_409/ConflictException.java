package net.lafox.ihor.backend.exception.conflict_409;

public class ConflictException extends RuntimeException {
  public ConflictException(String message) {
    super(message);
  }
}
