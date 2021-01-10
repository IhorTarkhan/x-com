package net.lafox.ihor.backend.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@JsonSerialize
public class SignInResponse {
  @NonNull private String accessToken;
  private String tokenType = "Bearer";
}
