package net.lafox.ihor.backend.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.repository.PlayerRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class PlayerDetailsService implements UserDetailsService {
  private final PlayerRepository playerRepository;

  @Override
  public UserDetails loadUserByUsername(String username) {
    return playerRepository
        .findByUsername(username)
        .orElseThrow(
            () -> {
              log.error("Player not found with username: " + username);
              return null;
            });
  }
}
