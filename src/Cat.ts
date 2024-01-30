import { ColorCat } from "./ColorCat";

export interface Cat {
  id: number;
  name: string;
  bornDate: Date;
  color: ColorCat;
}