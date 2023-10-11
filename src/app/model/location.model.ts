import {NightClub} from "./night-club.model";

export interface Location {

  id: number
  name: string
  nightClubs: NightClub[]

}
