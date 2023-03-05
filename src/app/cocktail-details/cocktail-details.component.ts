import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description:
      'Avec ses fines bulles et son côté frais, ce cocktail cubain au savoureux goût de menthe est un incontournable.',
  };

  constructor() {}

  ngOnInit(): void {}
}
