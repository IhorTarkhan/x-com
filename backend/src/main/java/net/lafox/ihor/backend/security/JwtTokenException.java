package net.lafox.ihor.backend.security;

public class JwtTokenException extends RuntimeException {
  public JwtTokenException(String message) {
    super(message);
  }
}
