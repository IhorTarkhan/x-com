package net.lafox.ihor.backend.dto.action;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.lafox.ihor.backend.dto.PositionDto;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonSerialize
public class FireActionDto implements UnitAction {
  private PositionDto target;
  private Integer damage;
  private Double chance;
}
