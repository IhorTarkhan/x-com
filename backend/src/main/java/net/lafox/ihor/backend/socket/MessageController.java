package net.lafox.ihor.backend.socket;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.request.SignInRequest;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.TimeUnit;

import static net.lafox.ihor.backend.config.SocketConfig.WEBSOCKET_BROKER_URL;

@Slf4j
@RequiredArgsConstructor
@RestController
public class MessageController {
  private final SimpMessagingTemplate simpMessagingTemplate;

  @MessageMapping("/d/{to}")
  public void sendMessage(@DestinationVariable String to, SignInRequest mess) {
    simpMessagingTemplate.convertAndSend(WEBSOCKET_BROKER_URL + "/2", "to " + to);
    try {
      TimeUnit.SECONDS.sleep(10);
    } catch (InterruptedException ignored) {
    }
    simpMessagingTemplate.convertAndSend(WEBSOCKET_BROKER_URL + "/2", "ddd");
    throw new RuntimeException();
  }
}
