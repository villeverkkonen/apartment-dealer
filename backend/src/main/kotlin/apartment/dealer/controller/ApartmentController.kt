package apartment.dealer.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ApartmentController {
  @GetMapping("/api/apartments")
  fun index(): String =
    "Hello World"
}
