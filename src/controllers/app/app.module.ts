import { Module } from '@nestjs/common';
import { HorseService } from '@services';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [HorseService]
})
export class AppModule {}
