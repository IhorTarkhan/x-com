package net.lafox.ihor.backend.mapper;

import net.lafox.ihor.backend.dto.PositionDto;
import net.lafox.ihor.backend.entity.Position;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface PositionMapper {
  PositionMapper POSITION_MAPPER = Mappers.getMapper(PositionMapper.class);

  @Mapping(target = "id", ignore = true)
  Position dtoToEntity(PositionDto dto);

  PositionDto entityToDto(Position entity);
}
