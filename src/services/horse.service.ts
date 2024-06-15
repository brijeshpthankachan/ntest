import { IHorse } from '@models';
import { Injectable } from '@nestjs/common';

const horses: IHorse[] = [
  {
    id: 'b606f6a0-91a8-4e3c-b85d-6ae8f4c65068',
    name: 'Thunder',
    breed: 'Thoroughbred'
  },
  {
    id: 'f6d1989e-6700-43b4-9143-bc5f720e3c9e',
    name: 'Spirit',
    breed: 'Quarter Horse'
  },
  {
    id: 'c37e5920-9205-41e6-bbe1-bf32a4b254d6',
    name: 'Arabesque',
    breed: 'Arabian'
  },
  {
    id: 'a4b9b280-7a3a-44f8-b430-6b03f6ab5e4e',
    name: 'Spotlight',
    breed: 'Appaloosa'
  },
  {
    id: '7cdd9f63-3b30-4778-bc42-c15b0764ab2d',
    name: 'Picasso',
    breed: 'Paint'
  },
  {
    id: 'e740a82c-7e2a-4934-9c5d-3ebbb2d0e250',
    name: 'Midnight',
    breed: 'Friesian'
  },
  {
    id: 'e7284b62-975f-46d4-89ab-d5c2e1d0908c',
    name: 'Daisy',
    breed: 'Pony'
  },
  {
    id: '02e3a9de-4a20-4e2c-8ea2-0644565d9e03',
    name: 'Titan',
    breed: 'Draft'
  },
  {
    id: '4a6ac7c7-632d-48e5-82f1-4029f0c59aa2',
    name: 'Phoenix',
    breed: 'Mustang'
  },
  {
    id: '8c4b8d7f-8ec2-48e6-b25c-87ff4326a721',
    name: 'Cinnamon',
    breed: 'Quarter Horse'
  }
];

@Injectable()
export class HorseService {
  findById(id: string): IHorse {
    return horses.find((horse) => horse.id === id);
  }

  getAll() {
    return horses;
  }
}
