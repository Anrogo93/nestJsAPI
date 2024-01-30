"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatProvider = void 0;
const common_1 = require("@nestjs/common");
const ColorCat_1 = require("./ColorCat");
let CatProvider = class CatProvider {
    cats = [
        {
            id: 1,
            name: 'hello',
            bornDate: new Date(),
            color: ColorCat_1.ColorCat.Black,
        }
    ];
    add(cat) {
        this.cats.push(cat);
    }
    getOne(id) {
        return this.cats.filter((cat) => cat.id === id)[0];
    }
    list() {
        return this.cats;
    }
    delete(id) {
        let k = 0;
        while (k < this.cats.length && this.cats[k]?.id !== id) {
            k++;
        }
        this.cats.splice(k, 1);
    }
};
exports.CatProvider = CatProvider;
exports.CatProvider = CatProvider = __decorate([
    (0, common_1.Injectable)()
], CatProvider);
//# sourceMappingURL=CatProvider.js.map