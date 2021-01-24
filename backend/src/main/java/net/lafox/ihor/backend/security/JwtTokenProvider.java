package net.lafox.ihor.backend.security;

import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.lafox.ihor.backend.property.JwtProperties;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Date;

@Component
@Log4j2
@RequiredArgsConstructor
public class JwtTokenProvider {
  private final JwtProperties jwtProperties;

  public String generateShort(String subject) {
    Date now = new Date();
    Date expiryDate = new Date(now.getTime() + jwtProperties.getExpirationInMsShort());
    return Jwts.builder()
        .setSubject(subject)
        .setIssuedAt(now)
        .setExpiration(expiryDate)
        .signWith(SignatureAlgorithm.HS512, jwtProperties.getKey())
        .compact();
  }

  public String generateLong(String subject) {
    return Jwts.builder()
        .setSubject(subject)
        .setIssuedAt(new Date())
        .signWith(SignatureAlgorithm.HS512, jwtProperties.getKey())
        .compact();
  }

  public String getSubject(String token) {
    Claims claims =
        Jwts.parser().setSigningKey(jwtProperties.getKey()).parseClaimsJws(token).getBody();
    return claims.getSubject();
  }

  public boolean isValid(String authToken) {
    if (!StringUtils.hasText(authToken)) return false;
    try {
      Jwts.parser().setSigningKey(jwtProperties.getKey()).parseClaimsJws(authToken);
      return true;
    } catch (SignatureException ex) {
      log.error("Invalid JWT signature");
    } catch (MalformedJwtException ex) {
      log.error("Invalid JWT token");
    } catch (ExpiredJwtException ex) {
      log.error("Expired JWT token");
    } catch (UnsupportedJwtException ex) {
      log.error("Unsupported JWT token");
    } catch (IllegalArgumentException ex) {
      log.error("JWT claims string is empty");
    }
    return false;
  }
}
