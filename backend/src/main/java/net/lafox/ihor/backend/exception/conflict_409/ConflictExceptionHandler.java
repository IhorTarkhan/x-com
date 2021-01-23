package net.lafox.ihor.backend.exception.conflict_409;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ConflictExceptionHandler {
  @ExceptionHandler(ConflictException.class)
  public ResponseEntity<Object> handleBadIp(ConflictException exception) {
    return ResponseEntity.status(HttpStatus.CONFLICT).body(exception.getMessage());
  }
}
