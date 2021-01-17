package net.lafox.ihor.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.request.SignInRequest;
import net.lafox.ihor.backend.dto.response.TokenResponse;
import net.lafox.ihor.backend.dto.request.SignUpRequest;
import net.lafox.ihor.backend.service.AuthenticationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class AuthenticationController {
  private final AuthenticationService authenticationService;

  @PostMapping(value = "sign-in")
  public TokenResponse signIn(@RequestBody SignInRequest signInRequest) {
    return authenticationService.signIn(signInRequest);
  }

  @PostMapping(value = "sign-up")
  public TokenResponse signUp(@RequestBody SignUpRequest signUpRequest) {
    return authenticationService.signUp(signUpRequest);
  }
}
