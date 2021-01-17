package net.lafox.ihor.backend.dto.response;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@JsonSerialize
public class TokenResponse {
  @NonNull private String accessToken;
  private String tokenType = "Bearer";
}
