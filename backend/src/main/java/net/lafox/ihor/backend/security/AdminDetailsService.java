package net.lafox.ihor.backend.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.entity.AdminUser;
import net.lafox.ihor.backend.repository.AdminUserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdminDetailsService implements UserDetailsService {
  private final AdminUserRepository adminRepository;

  @Override
  public UserDetails loadUserByUsername(String email) {
    return adminRepository
        .findByEmail(email)
        .orElseThrow(() -> new RuntimeException("User not found with email: " + email));
  }

  public UserDetails loadUserById(Long id) {
    return adminRepository
        .findById(id)
        .filter(AdminUser::isEnabled)
        .orElseThrow(() -> new RuntimeException("User not found with id : " + id));
  }
}
