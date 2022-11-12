import {GasUtilities} from "./GasUtilities";
import {WaterUtilities} from "./WaterUtilities";

export interface Utilities{
  id: number,
  water: WaterUtilities,
  gas: GasUtilities
}
