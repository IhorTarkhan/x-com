package net.lafox.ihor.backend.repository;

import net.lafox.ihor.backend.entity.TestData;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

@Repository
public interface TestDataRepository extends JpaRepositoryImplementation<TestData, Long> {}
