package net.lafox.ihor.backend.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@JsonSerialize
public class SignInRequest {
  private String email;
  private String password;
}
