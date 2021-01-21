package net.lafox.ihor.backend.security;

import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.lafox.ihor.backend.property.JwtProperties;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Date;

@Component
@Log4j2
@RequiredArgsConstructor
public class JwtTokenProvider {
  private final JwtProperties jwtProperties;

  public String generateToken(Authentication authentication) {
    UserDetails playerPrincipal = (UserDetails) authentication.getPrincipal();
    Date now = new Date();
    Date expiryDate = new Date(now.getTime() + jwtProperties.getExpirationInMs());

    return Jwts.builder()
        .setSubject(playerPrincipal.getUsername())
        .setIssuedAt(now)
        .setExpiration(expiryDate)
        .signWith(SignatureAlgorithm.HS512, jwtProperties.getKey())
        .compact();
  }

  public String getUsernameFromJWT(String token) {
    Claims claims =
        Jwts.parser().setSigningKey(jwtProperties.getKey()).parseClaimsJws(token).getBody();
    return claims.getSubject();
  }

  public void validate(String authToken) {
    try {
      Jwts.parser().setSigningKey(jwtProperties.getKey()).parseClaimsJws(authToken);
      StringUtils.hasText(authToken);
    } catch (SignatureException ex) {
      log.error("Invalid JWT signature");
      throw new JwtTokenException("Invalid JWT signature");
    } catch (MalformedJwtException ex) {
      log.error("Invalid JWT token");
      throw new JwtTokenException("Invalid JWT token");
    } catch (ExpiredJwtException ex) {
      log.error("Expired JWT token");
      throw new JwtTokenException("Expired JWT token");
    } catch (UnsupportedJwtException ex) {
      log.error("Unsupported JWT token");
      throw new JwtTokenException("Unsupported JWT token");
    } catch (IllegalArgumentException ex) {
      log.error("JWT claims string is empty");
      throw new JwtTokenException("JWT claims string is empty");
    }
  }
}
