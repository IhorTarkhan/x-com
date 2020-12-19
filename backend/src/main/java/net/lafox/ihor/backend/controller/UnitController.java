package net.lafox.ihor.backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.UnitDto;
import net.lafox.ihor.backend.service.UnitService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping(value = "units")
public class UnitController {
  private final UnitService unitService;

  @GetMapping
  public List<UnitDto> fetchAllUnits() {
    return unitService.fetchAllUnits();
  }
}
