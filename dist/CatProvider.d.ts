import { Cat } from "./Cat";
export declare class CatProvider {
    private readonly cats;
    add(cat: Cat): void;
    getOne(id: number): Cat | undefined;
    list(): Cat[];
    delete(id: number): void;
}
