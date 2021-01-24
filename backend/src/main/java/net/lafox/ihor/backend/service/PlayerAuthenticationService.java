package net.lafox.ihor.backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.request.SignInRequest;
import net.lafox.ihor.backend.dto.request.SignUpRequest;
import net.lafox.ihor.backend.dto.response.LoginResponse;
import net.lafox.ihor.backend.entity.Player;
import net.lafox.ihor.backend.exception.conflict_409.ConflictException;
import net.lafox.ihor.backend.exception.unauthorized_401.UnauthorizedException;
import net.lafox.ihor.backend.repository.PlayerRepository;
import net.lafox.ihor.backend.security.JwtTokenProvider;
import net.lafox.ihor.backend.util.SecurityUtil;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class PlayerAuthenticationService {
  private final PlayerRepository playerRepository;
  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider tokenProvider;
  private final PasswordEncoder passwordEncoder;

  public LoginResponse signUp(SignUpRequest request) {
    validate(request);
    Player newPlayer = toPlayerEntity(request);
    playerRepository.save(newPlayer);
    Player authPlayer = getAuthorisedPlayer(request.getUsername(), request.getPassword());
    String jwtShort = tokenProvider.generateShort(authPlayer.getUsername());
    String jwtLong = tokenProvider.generateLong(authPlayer.getUsername());
    return new LoginResponse(jwtShort, jwtLong);
  }

  public LoginResponse signIn(SignInRequest request) {
    Player authPlayer = getAuthorisedPlayer(request.getUsername(), request.getPassword());
    String jwtShort = tokenProvider.generateShort(authPlayer.getUsername());
    String jwtLong = tokenProvider.generateLong(authPlayer.getUsername());
    return new LoginResponse(jwtShort, jwtLong);
  }

  @PreAuthorize("hasRole('PLAYER')")
  public String updateShortJwt() {
    Player currentPlayer = SecurityUtil.getCurrentPlayer();
    if (currentPlayer == null) {
      log.error("Have no grant to update short jwt");
      throw new UnauthorizedException("Have no grant to update short jwt");
    }
    return tokenProvider.generateShort(currentPlayer.getUsername());
  }

  private void validate(SignUpRequest request) {
    if (playerRepository.existsByUsername(request.getUsername()))
      throw new ConflictException(
          String.format("Username '%s' already taken", request.getUsername()));
  }

  private Player toPlayerEntity(SignUpRequest request) {
    return Player.builder()
        .username(request.getUsername())
        .password(passwordEncoder.encode(request.getPassword()))
        .build();
  }

  private Player getAuthorisedPlayer(String username, String password) {
    return (Player)
        authenticationManager
            .authenticate(new UsernamePasswordAuthenticationToken(username, password))
            .getPrincipal();
  }
}
