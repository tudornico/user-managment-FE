import {User} from "./User";
import {ElectricUtilities} from "./ElectricUtilities";
import {GasUtilities} from "./GasUtilities";
import {WaterUtilities} from "./WaterUtilities";

export interface RoomDto{
  name: string,
  renter: User,
  building: string,
  electric: ElectricUtilities,
  gas: GasUtilities,
  water: WaterUtilities
}
