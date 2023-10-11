import {NightClub} from "./night-club.model";

export interface Owner {

  id: number
  name: string
  lastName: string
  email: string
  password: string
  nightClubs: NightClub[]


}
