import { Test, TestingModule } from '@nestjs/testing';
import { HorseService } from '../../services';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;
  let horseService: HorseService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [HorseService]
    }).compile();

    appController = app.get<AppController>(AppController);
    horseService = app.get(HorseService);
  });

  describe('root', () => {
    it('should return a list of horses', () => {
      const mockReturnValue = [
        { breed: 'jest', id: '120', name: 'jest' },
        { breed: 'jest', id: '121', name: 'jest' }
      ];
      jest.spyOn(horseService, 'getAll').mockReturnValue(mockReturnValue);
      expect(appController.getAll()).toBe(mockReturnValue);
    });

    it('should return a horse that matches the given id', () => {
      const mockReturnValue = [{ breed: 'jest', id: 'jest', name: 'jest' }];
      jest.spyOn(horseService, 'getAll').mockReturnValue(mockReturnValue);
      expect(appController.getAll('121')).toBe(mockReturnValue[1]);
    });
  });
});
