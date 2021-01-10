package net.lafox.ihor.backend.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.exception.jwt.ExpiredException;
import net.lafox.ihor.backend.exception.jwt.JwtTokenException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Slf4j
@RequiredArgsConstructor
public class PlayerJwtAuthenticationFilter extends OncePerRequestFilter {
  private final JwtTokenProvider tokenProvider;
  private final PlayerDetailsService playerDetailsService;

  @Override
  protected void doFilterInternal(
      HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
    try {
      String jwt = getJwtFromHeader(request);
      UserDetails userDetails = fetchUserDetails(jwt);
      if (userDetails != null) {
        setAuthentication(request, userDetails);
      }
      filterChain.doFilter(request, response);
    } catch (ExpiredException exception) {
      response.setStatus(HttpStatus.GONE.value());
    } catch (JwtTokenException exception) {
      response.setStatus(HttpStatus.UNAUTHORIZED.value());
    } catch (RuntimeException exception) {
      response.setStatus(HttpStatus.BAD_REQUEST.value());
    }
  }

  private void setAuthentication(HttpServletRequest request, UserDetails userDetails) {
    var authentication =
        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
    SecurityContextHolder.getContext().setAuthentication(authentication);
  }

  private UserDetails fetchUserDetails(String jwt) {
    if (StringUtils.hasText(jwt)) {
      tokenProvider.validate(jwt);
      String username = tokenProvider.getUsernameFromJWT(jwt);
      return playerDetailsService.loadUserByUsername(username);
    }
    return null;
  }

  private String getJwtFromHeader(HttpServletRequest request) {
    String bearerToken = request.getHeader("Authorization");
    if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
      return bearerToken.substring(7);
    }
    return null;
  }
}
