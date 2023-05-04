import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailsPage } from './details/details.page';
import { HomePage } from './home/home.page';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'favorite',
        loadChildren: () => import('./favorite/favorite.module').then((m) => m.FavoritePageModule),
      },
      {
        path: 'details',
        loadChildren: () => import('./details/details.module').then((m) => m.DetailsPageModule),
      },
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
