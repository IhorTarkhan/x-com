package net.lafox.ihor.backend.repository;

import net.lafox.ihor.backend.entity.Position;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionRepository extends JpaRepositoryImplementation<Position, Long> {}
