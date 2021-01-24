package net.lafox.ihor.backend.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
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
    String jwt = getJwtFromHeader(request);
    if (tokenProvider.isValid(jwt)) {
      UserDetails userDetails = fetchUserDetails(jwt);
      if (userDetails != null) {
        setAuthentication(request, userDetails);
      }
    }
    filterChain.doFilter(request, response);
  }

  private void setAuthentication(HttpServletRequest request, UserDetails userDetails) {
    var authentication =
        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
    SecurityContextHolder.getContext().setAuthentication(authentication);
  }

  private UserDetails fetchUserDetails(String jwt) {
    String username = tokenProvider.getSubject(jwt);
    return playerDetailsService.loadUserByUsername(username);
  }

  private String getJwtFromHeader(HttpServletRequest request) {
    return request.getHeader("player");
  }
}
