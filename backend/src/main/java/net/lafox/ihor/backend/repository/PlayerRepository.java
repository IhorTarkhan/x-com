package net.lafox.ihor.backend.repository;

import net.lafox.ihor.backend.entity.Player;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepositoryImplementation<Player, Long> {
  Optional<Player> findByEmail(String username);
}
