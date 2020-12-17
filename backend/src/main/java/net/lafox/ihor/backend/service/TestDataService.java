package net.lafox.ihor.backend.service;

import lombok.RequiredArgsConstructor;
import net.lafox.ihor.backend.dto.TestDataDto;
import net.lafox.ihor.backend.property.TestProperties;
import net.lafox.ihor.backend.repository.TestDataRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static net.lafox.ihor.backend.mapper.TestDataMapper.TEST_DATA_MAPPER;

@Service
@RequiredArgsConstructor
public class TestDataService {
  private final TestProperties testProperties;
  private final TestDataRepository testDataRepository;

  public List<TestDataDto> fetchAll() {
    return testDataRepository.findAll().stream()
        .map(TEST_DATA_MAPPER::entityToDto)
        .collect(Collectors.toList());
  }
}
