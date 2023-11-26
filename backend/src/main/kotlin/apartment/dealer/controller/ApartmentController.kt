package apartment.dealer.controller

import apartment.dealer.domain.Apartment
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class ApartmentController {
  @GetMapping("/api/apartments")
  fun index(
    @RequestParam apartmentType: String,
  ): List<Apartment> {
    println("apartmentType: $apartmentType")
    return generateListOfDummyApartments(apartmentType)
  }

  private fun generateListOfDummyApartments(apartmentType: String): List<Apartment> =
    listOf(
      Apartment(
        streetAddress = "$apartmentType Street 1",
        city = "$apartmentType City 1",
      ),
      Apartment(
        streetAddress = "$apartmentType Street 2",
        city = "$apartmentType City 2",
      ),
      Apartment(
        streetAddress = "$apartmentType Street 3",
        city = "$apartmentType City 3",
      ),
    )
}
