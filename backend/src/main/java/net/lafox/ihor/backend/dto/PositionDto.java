package net.lafox.ihor.backend.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.lafox.ihor.backend.entity.PositionType;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonSerialize
public class PositionDto {
  private Long id;
  private Integer x;
  private Integer y;
  private PositionType type;
}
