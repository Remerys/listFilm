/* eslint-disable prefer-const */
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm: string
  moviesList = []
  favoriteFilmList: any
  idFavoriteList: any = []

  constructor(private router: Router, private storage: Storage) {
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

    this.storage.get('favoriteFilmsList').then(val => {
      if (val != null) {
        this.favoriteFilmList = val
      } else {
        this.favoriteFilmList = []
      }
    })

    this.storage.get('idFavoriteFilmsList').then(val => {
      if (val != null) {
        this.idFavoriteList = val
      } else {
        this.idFavoriteList = []
      }
    })
  }

  ionViewWillEnter() {
    this.storage.get('favoriteFilmsList').then(val => {
      if (val != null) {
        this.favoriteFilmList = val
      } else {
        this.favoriteFilmList = []
      }
    })

    this.storage.get('idFavoriteFilmsList').then(val => {
      if (val != null) {
        this.idFavoriteList = val
      } else {
        this.idFavoriteList = []
      }
    })
  }

  displayDetails(item) {
    let navigationExtras: NavigationExtras = {
      state : {
        param1: item
      }
    }
    this.router.navigate(['/details'], navigationExtras);
  }

  addFavorite(film: any) {
    this.favoriteFilmList.push(film)
    this.storage.set('favoriteFilmsList', this.favoriteFilmList)

    this.idFavoriteList.push(film.id)
    this.storage.set('idFavoriteFilmsList', this.idFavoriteList)
  }

  removeFavorite(film: any) {
    const index = this.idFavoriteList.indexOf(film.id)

    if (index > -1) {
      this.favoriteFilmList.splice(index, 1)
      this.storage.set('favoriteFilmsList', this.favoriteFilmList)

      this.idFavoriteList.splice(index, 1)
      this.storage.set('idFavoriteFilmsList', this.idFavoriteList)
    }
  }

    // Permet d'aller sur la page correspondant à la route /home
    gotoPageAccueil() {
      this.router.navigate(['/home']);
    }

    // Permet d'aller sur la page correspondant à la route /favoris
    gotoPageFavoris() {
      this.router.navigate(['/favorite'],{});
    }
}
