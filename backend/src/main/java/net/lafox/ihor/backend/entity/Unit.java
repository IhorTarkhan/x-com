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
public class Unit {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private String name;

  @Enumerated(EnumType.STRING)
  private UnitType type;

  @OneToOne
  private Position position;

  private Integer maxHealth;

  private Integer health;
}
