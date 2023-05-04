import { Component} from '@angular/core'
import { Router} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage {
  searchTerm: string
  favoriteFilmList: any
  idFavoriteList: any

  constructor(private router: Router, private storage: Storage) {

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

  removeFavorite(film: any) {
    const index = this.idFavoriteList.indexOf(film.id)

    if (index > -1) {
      this.favoriteFilmList.splice(index, 1)
      this.storage.set('favoriteFilmsList', this.favoriteFilmList)

      this.idFavoriteList.splice(index, 1)
      this.storage.set('idFavoriteFilmsList', this.idFavoriteList)
    }
  }
}
