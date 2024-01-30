import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Cat } from "./Cat";
import { CatProvider } from "./CatProvider";
import { CatInsertBody } from "./CatInsertBody";

@Controller('cats')
export class CatController {
  public constructor(private readonly catProvider: CatProvider) {}

  @Get()
  public list(): Cat[] {
    return this.catProvider.list();
  }


  @Post()
  public add(@Body() body: CatInsertBody): void {
    const nextId: number = this.catProvider.list().length + 1;

    this.catProvider.add({
      id: nextId,
      name: body.name,
      color: body.color,
      bornDate: new Date(),  
    })
  }

  @Delete(':catId')
  public delete(@Param('catId', ParseIntPipe) id: number): void {
    this.catProvider.delete(id);
  }
}