package net.lafox.ihor.backend.mapper;

import net.lafox.ihor.backend.dto.UnitDto;
import net.lafox.ihor.backend.entity.Unit;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UnitMapper {
  UnitMapper UNIT_MAPPER = Mappers.getMapper(UnitMapper.class);

  @Mapping(target = "id", ignore = true)
  Unit dtoToEntity(UnitDto dto);

  UnitDto entityToDto(Unit entity);
}
