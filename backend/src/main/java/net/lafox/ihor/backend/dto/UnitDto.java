package net.lafox.ihor.backend.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.lafox.ihor.backend.dto.action.UnitAction;
import net.lafox.ihor.backend.entity.UnitType;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonSerialize
public class UnitDto {
  private Long id;
  private String name;
  private UnitType type;
  private PositionDto position;
  private Integer maxHealth;
  private Integer health;
  private Map<ActionsType, List<UnitAction>> actions;
}
