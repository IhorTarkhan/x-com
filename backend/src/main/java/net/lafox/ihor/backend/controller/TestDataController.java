package net.lafox.ihor.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.TestDataDto;
import net.lafox.ihor.backend.service.TestDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
public class TestDataController {
  private final TestDataService testDataService;

  @GetMapping("test")
  public List<TestDataDto> test() {
    return testDataService.fetchAll();
  }
}
