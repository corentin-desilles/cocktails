import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description:
        'Avec ses fines bulles et son côté frais, ce cocktail cubain au savoureux goût de menthe est un incontournable.',
    },
    {
      name: 'Irish Coffee',
      img: 'https://images.unsplash.com/photo-1605361293140-fd5edb9ae9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description:
        "L'irish Coffee est une préparation typiquement irlandaise à base de whiskey, café et crème fouettée. Il est généralement servi chaud en digestif.",
    },
    {
      name: 'Sangria',
      img: 'https://images.unsplash.com/photo-1600456531963-f51054e51619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description:
        "La sangria, boisson nationale en Espagne, traditionnellement servie avec des morceaux d'orange sanguine et de citron, a su se faire une place à la carte des bars à cocktails du monde entier.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
