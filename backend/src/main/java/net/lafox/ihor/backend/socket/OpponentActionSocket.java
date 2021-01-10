package net.lafox.ihor.backend.socket;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import lombok.extern.log4j.Log4j2;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.net.InetSocketAddress;
import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

@Log4j2
public class OpponentActionSocket extends WebSocketServer {
  public OpponentActionSocket(int port) {
    super(new InetSocketAddress(port));
  }

  @Override
  @SneakyThrows
  public void onOpen(WebSocket webSocket, ClientHandshake clientHandshake) {
    Map<String, String> mapCookies =
        Arrays.stream(clientHandshake.getFieldValue("Cookie").split(";"))
            .collect(
                Collectors.toMap(
                    s -> s.substring(0, s.indexOf("=")), s -> s.substring(s.indexOf("=") + 1)));
    String userCookie;

    ObjectMapper mapper = new ObjectMapper();
    mapper.readValue("", Object.class);
    userCookie = mapCookies.getOrDefault("x-com", "111");
    webSocket.send(userCookie);
  }

  @Override
  @SneakyThrows
  public void onMessage(WebSocket webSocket, String message) {
    webSocket.send("Message " + message);
  }

  @Override
  public void onError(WebSocket webSocket, Exception ex) {
    log.error(ex);
  }

  @Override
  @SneakyThrows
  public void onClose(WebSocket webSocket, int code, String reason, boolean remote) {
    log.info(webSocket);
  }
}
