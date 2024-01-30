import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { CatModule } from './CatModule';

@Module({
  imports: [CatModule],
  controllers: [AppController],
})
export class AppModule {}