package net.lafox.ihor.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.request.SignInRequest;
import net.lafox.ihor.backend.dto.request.SignUpRequest;
import net.lafox.ihor.backend.dto.response.LoginResponse;
import net.lafox.ihor.backend.service.PlayerAuthenticationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("player")
public class PlayerAuthenticationController {
  private final PlayerAuthenticationService playerAuthenticationService;

  @PostMapping("sign-up")
  public LoginResponse signUp(@RequestBody SignUpRequest signUpRequest) {
    return playerAuthenticationService.signUp(signUpRequest);
  }

  @PostMapping("sign-in")
  public LoginResponse signIn(@RequestBody SignInRequest signInRequest) {
    return playerAuthenticationService.signIn(signInRequest);
  }
}
