package net.lafox.ihor.backend.service;

import net.lafox.ihor.backend.dto.TestDataDto;
import net.lafox.ihor.backend.entity.TestData;
import net.lafox.ihor.backend.repository.TestDataRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doReturn;

@SpringBootTest
public class TestDataServiceTest {
  @Autowired private TestDataService testDataService;
  @MockBean private TestDataRepository testDataRepository;

  @BeforeEach
  void beforeEach() {
    //    when(testDataService.fetchAll().thenThrow(new RuntimeException("test"));
    doReturn(List.of(new TestData(1L, "test_text"))).when(testDataRepository).findAll();
  }

  @Test
  void testCaseTest() {
    List<TestDataDto> testDataList = testDataService.fetchAll();
    assertEquals(1, testDataList.size());
  }
}
