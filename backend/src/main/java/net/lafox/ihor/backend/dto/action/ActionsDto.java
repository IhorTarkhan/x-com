package net.lafox.ihor.backend.dto.action;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonSerialize
public class ActionsDto {
  private List<RunActionDto> run;
  private List<FireActionDto> fire;
}
