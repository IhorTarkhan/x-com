package net.lafox.ihor.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static org.springframework.http.HttpMethod.*;

@Configuration
public class GlobalCorsConfig {
  public static String[] getAllowedOrigins() {
    return new String[] {"http://localhost:3000", "http://127.0.0.1:3000"}; // TODO add prod
  }

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry
            .addMapping("/**")
            .allowCredentials(true)
            .allowedMethods(
                GET.name(), HEAD.name(), POST.name(), PUT.name(), DELETE.name(), OPTIONS.name())
            .allowedOrigins(getAllowedOrigins());
      }
    };
  }
}
