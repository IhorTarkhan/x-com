package net.lafox.ihor.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class TestDataDto {
  private Long id;
  private String text;
}
