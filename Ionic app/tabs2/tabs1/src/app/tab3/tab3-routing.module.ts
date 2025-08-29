import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
    children:
    [
      {
        path: 'playlists',
        loadChildren: () => import('./playlists/playlists.module').then( m => m.PlaylistsPageModule)
      },
      {
        path: 'artists',
        loadChildren: () => import('./artists/artists.module').then( m => m.ArtistsPageModule)
      },
      {
        path: 'albums',
        loadChildren: () => import('./albums/albums.module').then( m => m.AlbumsPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
