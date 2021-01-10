package net.lafox.ihor.backend.entity;

import lombok.*;
import net.lafox.ihor.backend.security.Role;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
@ToString(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "admin_user")
@SQLDelete(sql = "UPDATE admin_user SET deleted_at = now() WHERE id = ?")
@Where(clause = "deleted_at IS NULL")
@Builder
public class AdminUser implements UserDetails {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "email", nullable = false)
  private String email;

  @Column(name = "password", nullable = false)
  private String password;

  @Builder.Default
  @Column(name = "email_verified")
  private boolean emailVerified = true;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "phone")
  private String phone;

  @Enumerated(EnumType.STRING)
  @Column(name = "role", nullable = false)
  private Role role;

  @Builder.Default
  @Column(name = "enabled", nullable = false)
  private boolean enabled = true;

  @Builder.Default
  @Column(name = "account_non_expired", nullable = false)
  private boolean accountNonExpired = true;

  @Builder.Default
  @Column(name = "account_non_locked", nullable = false)
  private boolean accountNonLocked = true;

  @Builder.Default
  @Column(name = "credentials_non_expired", nullable = false)
  private boolean credentialsNonExpired = true;

  @Column(name = "deleted_at")
  private LocalDateTime deletedAt;

  @PreRemove
  public void deleteAdminUser() {
    this.deletedAt = LocalDateTime.now();
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return Collections.singleton(new SimpleGrantedAuthority("ROLE_" + role.toString()));
  }

  @Override
  public String getUsername() {
    return email;
  }
}
