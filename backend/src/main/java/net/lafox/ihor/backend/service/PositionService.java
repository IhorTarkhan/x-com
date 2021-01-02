package net.lafox.ihor.backend.service;

import lombok.RequiredArgsConstructor;
import net.lafox.ihor.backend.dto.PositionDto;
import net.lafox.ihor.backend.repository.PositionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;
import static net.lafox.ihor.backend.mapper.PositionMapper.POSITION_MAPPER;

@Service
@RequiredArgsConstructor
public class PositionService {
  private final PositionRepository positionRepository;

  public List<PositionDto> fetchAllPositions() {
    return positionRepository.findAll().stream()
        .map(POSITION_MAPPER::entityToDto)
        .collect(toList());
  }
}
