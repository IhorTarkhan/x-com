package net.lafox.ihor.backend.exception.unauthorized_401;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UnauthorizedExceptionHandler {
  @ExceptionHandler(UnauthorizedException.class)
  public ResponseEntity<Object> handleBadIp(UnauthorizedException exception) {
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(exception.getMessage());
  }
}
