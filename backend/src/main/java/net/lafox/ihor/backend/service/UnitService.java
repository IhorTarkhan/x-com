package net.lafox.ihor.backend.service;

import lombok.RequiredArgsConstructor;
import net.lafox.ihor.backend.dto.UnitDto;
import net.lafox.ihor.backend.dto.action.ActionsDto;
import net.lafox.ihor.backend.dto.action.RunActionDto;
import net.lafox.ihor.backend.entity.Position;
import net.lafox.ihor.backend.entity.UnitType;
import net.lafox.ihor.backend.repository.PositionRepository;
import net.lafox.ihor.backend.repository.UnitRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;
import static net.lafox.ihor.backend.entity.UnitType.*;
import static net.lafox.ihor.backend.mapper.PositionMapper.POSITION_MAPPER;
import static net.lafox.ihor.backend.mapper.UnitMapper.UNIT_MAPPER;

@Service
@RequiredArgsConstructor
public class UnitService {
  private final UnitRepository unitRepository;
  private final PositionRepository positionRepository;

  public List<UnitDto> fetchAllUnits() {
    return unitRepository.findAll().stream()
        .map(
            unit -> {
              List<RunActionDto> runActions =
                  getRunnableActions(unit.getPosition(), unit.getType());
              UnitDto unitDto = UNIT_MAPPER.entityToDto(unit);
              unitDto.setActions(new ActionsDto(runActions, null));
              return unitDto;
            })
        .collect(toList());
  }

  private List<RunActionDto> getRunnableActions(Position currentPosition, UnitType type) {
    return getRunnablePositions(currentPosition, type).stream()
        .map(position -> new RunActionDto(POSITION_MAPPER.entityToDto(position)))
        .collect(toList());
  }

  private List<Position> getRunnablePositions(Position currentPosition, UnitType type) {
    return availableByDistanceRunPositions(currentPosition, type);
  }

  private List<Position> availableByDistanceRunPositions(Position currentPosition, UnitType type) {
    int distanceToThisType;

    if (type == RANGER) distanceToThisType = 5;
    else if (type == GRENADIER) distanceToThisType = 3;
    else if (type == SHARPSHOOTER) distanceToThisType = 3;
    else if (type == SPECIALIST) distanceToThisType = 4;
    else distanceToThisType = 0;

    return positionRepository.findAll().stream()
        .filter(
            position ->
                Math.sqrt(
                        Math.pow(position.getX() - currentPosition.getX(), 2)
                            + Math.pow(position.getY() - currentPosition.getY(), 2))
                    < distanceToThisType)
        .collect(toList());
  }
}
