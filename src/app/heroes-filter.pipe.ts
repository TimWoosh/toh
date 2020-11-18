import { IterableDiffers, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroesFilter'
})
export class HeroesFilterPipe implements PipeTransform {

  transform(heroes: any[], filter: Object): any {
    if(!heroes || !filter){
      return heroes;
    }
    return heroes.filter(hero => hero.favorite);
  }
}
