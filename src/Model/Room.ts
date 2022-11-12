import {User} from "./User";

export interface Room{
  id:number,
  name: string,
  renter: User,
  startDate: Date,
  endDate: Date,
  rentedSurface: number,
  totalSurface: number,
}
