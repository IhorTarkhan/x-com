package net.lafox.ihor.backend.dto.response;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@JsonSerialize
public class LoginResponse {
  private final String accessToken;
}
