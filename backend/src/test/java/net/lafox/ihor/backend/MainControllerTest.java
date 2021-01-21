package net.lafox.ihor.backend;

import net.lafox.ihor.backend.controller.MainController;
import net.lafox.ihor.backend.service.SampleService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MainControllerTest {
  MainController mainController;
  @Mock SampleService sampleService;

  @BeforeEach
  void setup() {
    mainController = new MainController(sampleService);
  }

  @Test
  void simpleGetTest() {
    when(sampleService.getDbVersion()).thenReturn("ggg");
    assertEquals("ggg", mainController.test());
  }
}
