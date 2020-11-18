import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any{
    const heroes = [
      { id: 11, name: 'Dr Nice', favorite: false },
      { id: 12, name: 'Narco', favorite: false },
      { id: 13, name: 'Bombasto', favorite: false },
      { id: 14, name: 'Celeritas', favorite: false },
      { id: 15, name: 'Magneta', favorite: false },
      { id: 16, name: 'RubberMan', favorite: false },
      { id: 17, name: 'Dynama', favorite: false },
      { id: 18, name: 'Dr IQ', favorite: true },
      { id: 19, name: 'Magma', favorite: false },
      { id: 20, name: 'Tornado', favorite: false },
      { id: 21, name: 'I-Man', favorite: false }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
