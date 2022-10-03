import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  moviesList = []
  constructor(private router: Router) {
    fetch('./assets/films-json.json').then(res => res.json()).then(
      json => {
        this.moviesList = json
      }
    )
  }

  displayDetails(item) {
    let navigationExtras: NavigationExtras = {
      state : {
        param1: item
      }
    }
    this.router.navigate(['/details'], navigationExtras);
  }
}
