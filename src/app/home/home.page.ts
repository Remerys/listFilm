/* eslint-disable prefer-const */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm: string
  moviesList = []
  constructor(private router: Router) {
    // fetch('./assets/films-json.json').then(res => res.json()).then(
    //   json => {
    //     this.moviesList = json
    //   }
    // )
    fetch('http://127.0.0.1:8001/api/series').then(res => res.json()).then(
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

  // public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  // public results = [...this.moviesList]
  // handleChange(event) {
  //   console.log('moviesList', this.moviesList)
  //   console.log('data', this.data)
  //   console.log('results', this.results)
  //   const query = event.target.value.toLowerCase()
  //   this.results = this.moviesList.filter(d => d.toLowerCase().indexOf(query) > -1)
  // }

  // public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  // public results = [...this.data];

  // handleChange(event) {
  //   console.log(this.results)
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  // }
}
