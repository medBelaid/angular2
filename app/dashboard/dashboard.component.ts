import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './../models/hero';
import { Person } from './../models/person';
import { HeroService } from './../services/hero.service';
import { PeopleService } from './../services/people.service';
import {PuzzleComponent} from './../puzzle/puzzle.component';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  directives: [PuzzleComponent],
  providers: [HeroService, PeopleService],
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  people: Person[] = [];
  constructor(
  private router: Router,
  private heroService: HeroService,
  private peopleService : PeopleService) {}

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    this.people = this.peopleService.getAll();
  }
  gotoDetail(hero: Hero) {
  let link = ['/detail', hero.id];
  this.router.navigate(link);
}

}
