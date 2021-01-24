package net.lafox.ihor.backend.util;

import net.lafox.ihor.backend.entity.Player;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public final class SecurityUtil {
  public static Player getCurrentPlayer() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    try {
      return (Player) authentication.getPrincipal();
    } catch (ClassCastException e) {
      return null;
    }
  }
}
