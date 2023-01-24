import { Hero } from '../Interface/hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']


})
export class HeroDetailComponent implements OnInit  {
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
  private heroService: HeroService,
  //servicio de Angular para interactuar con el navegador.
  private location: Location
  ) { }

  ngOnInit(): void {
  }



}
