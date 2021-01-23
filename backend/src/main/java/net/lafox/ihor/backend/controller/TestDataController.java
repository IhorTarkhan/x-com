package net.lafox.ihor.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.entity.Player;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class TestDataController {

  @GetMapping("test")
  public String test() {
    return "world";
  }

  @GetMapping("test-authorize")
  @PreAuthorize("hasRole('PLAYER')")
  public String testAuthorize() {
    return "Hallo authorized user";
  }

  @GetMapping(value = "who-am-i")
  public String whoAmI() {
    Player principal =
        (Player) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    return principal.getUsername();
  }

  @PostMapping
  public Map<String, Object> testPost(@RequestBody Map<String, Object> req) {
    return Map.of("id", 1, "text", req.get("text"));
  }
}
