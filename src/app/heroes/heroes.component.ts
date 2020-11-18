import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { TimedDialogService } from '../timed-dialog.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  favorite = {favorite: 'true'};

  constructor(private heroService: HeroService, private messageService: MessageService, private dialogService: TimedDialogService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero =>{
        this.heroes.push(hero);
      });
  }

  setFavorite(hero: Hero): void {
    (hero.favorite) ? hero.favorite = false : hero.favorite = true;

    this.heroService.updateHero(hero)
      .subscribe(() => {});
  }

  startDelete(hero: Hero) {
    const options = {
      title: `Delete ${hero.name}`,
      message: `Are you sure you want to delete ${hero.name}?`,
      cancelText: 'Cancel',
      confirmText: 'Delete'
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        //do something if confirmed is true
        this.delete(hero);
      }
   });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
