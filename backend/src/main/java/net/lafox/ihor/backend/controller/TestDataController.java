package net.lafox.ihor.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
public class TestDataController {

  @GetMapping("test")
  public List<Object> test() {
    return List.of(1, "text", 's');
  }

  @PostMapping
  public Map<String, Object> testPost(@RequestBody Map<String, Object> req) {
    return Map.of("id", 1, "text", req.get("text"));
  }
}
