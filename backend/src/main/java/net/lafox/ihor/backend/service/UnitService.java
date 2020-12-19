package net.lafox.ihor.backend.service;

import lombok.RequiredArgsConstructor;
import net.lafox.ihor.backend.dto.ActionsType;
import net.lafox.ihor.backend.dto.PositionDto;
import net.lafox.ihor.backend.dto.UnitDto;
import net.lafox.ihor.backend.dto.UnitType;
import net.lafox.ihor.backend.dto.action.FireActionDto;
import net.lafox.ihor.backend.dto.action.RunActionDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UnitService {

  public List<UnitDto> fetchAllUnits() {
    UnitDto someUnit =
        UnitDto.builder()
            .id(4L)
            .type(UnitType.RANGER)
            .name("Some Name")
            .maxHealth(12)
            .health(8)
            .position(new PositionDto(1, 1))
            .actions(
                Map.of(
                    ActionsType.FIRE,
                    List.of(
                        new FireActionDto(new PositionDto(4, 3), 3, 0.7),
                        new FireActionDto(new PositionDto(4, 4), 3, 0.5)),
                    ActionsType.RUN,
                    List.of(
                        new RunActionDto(new PositionDto(1, 2)),
                        new RunActionDto(new PositionDto(2, 2)),
                        new RunActionDto(new PositionDto(2, 1)))))
            .build();
    return List.of(someUnit);
  }
}
