package net.lafox.ihor.backend.service;

import lombok.RequiredArgsConstructor;
import net.lafox.ihor.backend.dto.UnitDto;
import net.lafox.ihor.backend.repository.UnitRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;
import static net.lafox.ihor.backend.mapper.UnitMapper.UNIT_MAPPER;

@Service
@RequiredArgsConstructor
public class UnitService {
  private final UnitRepository unitRepository;

  public List<UnitDto> fetchAllUnits() {
    return unitRepository.findAll().stream().map(UNIT_MAPPER::entityToDto).collect(toList());
  }
}
