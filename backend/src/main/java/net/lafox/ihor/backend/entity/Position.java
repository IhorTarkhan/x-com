package net.lafox.ihor.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Position {
  @Id @GeneratedValue private Long id;

  private Integer x;

  private Integer y;

  @Enumerated(EnumType.STRING)
  private PositionType type;
}
