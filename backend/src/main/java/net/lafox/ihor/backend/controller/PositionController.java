package net.lafox.ihor.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.PositionDto;
import net.lafox.ihor.backend.service.PositionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping(value = "positions")
public class PositionController {
  private final PositionService positionService;

  @GetMapping
  public List<PositionDto> fetchAllPositions() {
    return positionService.fetchAllPositions();
  }
}
