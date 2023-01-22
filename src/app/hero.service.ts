import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './Interface/hero';
// The HeroService class is going to provide an
//injectable service, and it can also have its own injected dependencies.

@Injectable({
  //A provider is something
  //that can create or deliver a service
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


getHeroes():Hero[]{

return HEROES;
}


}
