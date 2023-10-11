import {Booking} from "./booking.model";

export interface Client {

  id:number
  email: string
  password: string
  name: string
  lastName: string
  documentType: string
  idCard: string
  birthDate: Date
  bookings: Booking[]

}
