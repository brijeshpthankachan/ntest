import { Controller, Get, Query } from '@nestjs/common';
import { HorseService } from '@services';

@Controller('horse')
export class AppController {
  private readonly _horseService: HorseService;
  constructor(horseService: HorseService) {
    this._horseService = horseService;
  }

  @Get()
  getAll(@Query('id') id?: string): any {
    if (id) return this._horseService.findById(id);
    return this._horseService.getAll();
  }
}
