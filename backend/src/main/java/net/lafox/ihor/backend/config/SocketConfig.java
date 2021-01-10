package net.lafox.ihor.backend.config;

import lombok.RequiredArgsConstructor;
import net.lafox.ihor.backend.property.SocketProperties;
import net.lafox.ihor.backend.socket.OpponentActionSocket;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
@RequiredArgsConstructor
public class SocketConfig {
  private final SocketProperties socketProperties;

  @PostConstruct
  void startOpponentActionSocket() {
    new OpponentActionSocket(socketProperties.getPort()).start();
  }
}
