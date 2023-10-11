import {Booking} from "./booking.model";
import {Location} from "./location.model";
import {Owner} from "./owner.model";
import {Thematic} from "./thematic.model";

export interface NightClub {

  id: number
  name: string
  description: string
  coverPrice: number
  bookings: Booking[]
  location: Location
  owner: Owner
  thematic: Thematic[]


}
