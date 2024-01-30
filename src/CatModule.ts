import { Module } from "@nestjs/common";
import { CatProvider } from "./CatProvider";
import { CatController } from "./CatController";

@Module({
  controllers: [CatController],
  providers: [CatProvider],
})
export class CatModule {}