package net.lafox.ihor.backend.repository;

import net.lafox.ihor.backend.entity.Unit;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

@Repository
public interface UnitRepository extends JpaRepositoryImplementation<Unit, Long> {}
