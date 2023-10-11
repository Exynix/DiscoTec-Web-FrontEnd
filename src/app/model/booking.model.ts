import {Client} from "./client.model";
import {NightClub} from "./night-club.model";

export interface Booking {

  id: number
  date: Date
  quantity: number
  state: boolean
  rating: number
  client: Client
  nightClub: NightClub

}
