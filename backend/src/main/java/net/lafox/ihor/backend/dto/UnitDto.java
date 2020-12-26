package net.lafox.ihor.backend.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.lafox.ihor.backend.dto.action.ActionsDto;
import net.lafox.ihor.backend.entity.UnitType;

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
  private ActionsDto actions;
}
