package net.lafox.ihor.backend.mapper;

import net.lafox.ihor.backend.dto.TestDataDto;
import net.lafox.ihor.backend.entity.TestData;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TestDataMapper {
  TestDataMapper TEST_DATA_MAPPER = Mappers.getMapper(TestDataMapper.class);

  @Mapping(target = "id", ignore = true)
  TestData dtoToEntity(TestDataDto dto);

  @Mapping(target = "id", ignore = true)
  TestDataDto entityToDto(TestData entity);
}
