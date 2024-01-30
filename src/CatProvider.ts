import { Injectable } from "@nestjs/common";
import { Cat } from "./Cat";
import { ColorCat } from "./ColorCat";

@Injectable()
export class CatProvider {
  private readonly cats: Cat[] = [
    {
      id: 1,
      name: 'hello',
      bornDate: new Date(),
      color: ColorCat.Black,  
    }
  ];
  
  public add(cat: Cat): void {
    this.cats.push(cat);
  }

  public getOne(id: number): Cat | undefined {
    return this.cats.filter((cat: Cat) => cat.id === id)[0];
  }

  public list(): Cat[] {
    return this.cats;
  }

  public delete(id: number): void {
    let k: number = 0;

    while (k < this.cats.length && this.cats[k]?.id !== id) {
      k++;
    }

    this.cats.splice(k, 1);
  }
}