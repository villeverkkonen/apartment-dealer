package apartment.dealer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

//import org.springframework.context.annotation.Configuration
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@SpringBootApplication
class ApartmentDealerApplication

fun main(args: Array<String>) {
  runApplication<ApartmentDealerApplication>(*args)
}

@Configuration
class CorsConfiguration {

  @Bean
  fun corsConfigurer(): WebMvcConfigurer {
    return object : WebMvcConfigurer {
      override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**")
          .allowedOrigins("http://localhost:3000")
          .allowedMethods("GET", "POST", "PUT", "DELETE")
          .allowedHeaders("*")
      }
    }
  }
}

//@Configuration
//class StaticResourceConfiguration : WebMvcConfigurer {
//
//  override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
//    registry.addResourceHandler("/**")
//      .addResourceLocations("classpath:/static/")
//  }
//}
