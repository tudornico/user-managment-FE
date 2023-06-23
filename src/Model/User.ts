import {Role} from "./Role";

export interface User{
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  totalPrice: number,
  role: Role
}
