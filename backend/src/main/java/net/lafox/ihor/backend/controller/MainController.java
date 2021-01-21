package net.lafox.ihor.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.service.SampleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
public class MainController {
  private final SampleService sampleService;

  @GetMapping(value = "test2")
  public String test() {
    return sampleService.getDbVersion();
  }
}
