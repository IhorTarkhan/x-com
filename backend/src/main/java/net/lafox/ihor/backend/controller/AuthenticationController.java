package net.lafox.ihor.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.SignInRequest;
import net.lafox.ihor.backend.dto.SignInResponse;
import net.lafox.ihor.backend.service.AuthenticationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class AuthenticationController {
  private final AuthenticationService authenticationService;

  @PostMapping(value = "login")
  public SignInResponse login(@RequestBody SignInRequest signInRequest) {
    return authenticationService.login(signInRequest);
  }
}
