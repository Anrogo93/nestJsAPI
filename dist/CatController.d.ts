import { Cat } from "./Cat";
import { CatProvider } from "./CatProvider";
import { CatInsertBody } from "./CatInsertBody";
export declare class CatController {
    private readonly catProvider;
    constructor(catProvider: CatProvider);
    list(): Cat[];
    add(body: CatInsertBody): void;
    delete(id: number): void;
}
