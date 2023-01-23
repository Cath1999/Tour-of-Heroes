import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './Interface/hero';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
// The HeroService class is going to provide an
//injectable service, and it can also have its own injected dependencies.

@Injectable({
  //A provider is something
  //that can create or deliver a service
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}
