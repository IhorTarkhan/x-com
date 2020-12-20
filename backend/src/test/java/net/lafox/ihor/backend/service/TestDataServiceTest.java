package net.lafox.ihor.backend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TestDataServiceTest {
  //  @Autowired private TestDataService testDataService;
  //  @MockBean private TestDataRepository testDataRepository;

  @BeforeEach
  void beforeEach() {
    //    when(testDataService.fetchAll().thenThrow(new RuntimeException("test"));
    //    doReturn(List.of(new TestData(1L, "test_text"))).when(unitRepository).findAll();
  }

  @Test
  void testCaseTest() {
    //    List<TestDataDto> testDataList = testDataService.fetchAll();
    //    assertEquals(1, testDataList.size());
  }
}
