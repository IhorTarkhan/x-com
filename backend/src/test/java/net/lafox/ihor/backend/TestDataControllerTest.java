package net.lafox.ihor.backend;

import net.lafox.ihor.backend.controller.TestDataController;
import net.lafox.ihor.backend.util.JsonUtil;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Map;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(TestDataController.class)
//@ContextConfiguration(classes = {TestDataService.class, TestDataController.class})
public class TestDataControllerTest {
  @Autowired private MockMvc mockMvc;
//  @MockBean private TestDataService service;

//  @BeforeEach
//  void setup() {
//    when(service.fetchAll()).thenReturn(null);
//  }

  @Test
  public void simpleGetTest() throws Exception {
    mockMvc
        .perform(get("/test"))
        .andExpect(status().isOk())
        .andExpect(content().string(equalTo("Hello World!")));
  }

  @Test
  public void simplePostTest() throws Exception {
    String testRequest = JsonUtil.prettyJson(Map.of("test", "test"));
    String assertResponse = JsonUtil.prettyJson(Map.of("success", true));
    mockMvc
        .perform(post("/testpost").contentType(MediaType.APPLICATION_JSON).content(testRequest))
        .andExpect(status().isOk())
        .andExpect(content().contentType(MediaType.APPLICATION_JSON))
        .andExpect(content().json(assertResponse));
  }
}
