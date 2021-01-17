package net.lafox.ihor.backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.request.SignInRequest;
import net.lafox.ihor.backend.dto.response.TokenResponse;
import net.lafox.ihor.backend.dto.request.SignUpRequest;
import net.lafox.ihor.backend.entity.Player;
import net.lafox.ihor.backend.repository.PlayerRepository;
import net.lafox.ihor.backend.security.JwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthenticationService {
  private final AuthenticationManager authenticationManager;
  private final PlayerRepository playerRepository;
  private final JwtTokenProvider tokenProvider;
  private final PasswordEncoder passwordEncoder;

  public TokenResponse signIn(SignInRequest request) {
    Authentication auth = getAuthenticate(request.getEmail(), request.getPassword());
    return generateToken(auth);
  }

  public TokenResponse signUp(SignUpRequest request) {
    Player newPlayer =
        Player.builder()
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .build();
    playerRepository.save(newPlayer);
    Authentication auth = getAuthenticate(request.getEmail(), request.getPassword());
    return generateToken(auth);
  }

  private Authentication getAuthenticate(String email, String password) {
    return authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(email, password));
  }

  private TokenResponse generateToken(Authentication auth) {
    String jwt = tokenProvider.generateToken(auth);
    return new TokenResponse(jwt);
  }
}
