package net.lafox.ihor.backend.dto.request;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@JsonSerialize
public class SignUpRequest {
  private String username;
  private String password;
}
