package net.lafox.ihor.backend.repository;

import net.lafox.ihor.backend.entity.AdminUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminUserRepository extends JpaRepositoryImplementation<AdminUser, Long> {
  Optional<AdminUser> findByEmail(String email);

  @Query("select u.emailVerified from AdminUser u where u.email = ?1")
  Boolean isVerified(String email);
}
