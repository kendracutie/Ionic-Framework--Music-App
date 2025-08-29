import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  isPlaylistsActivated: boolean = true;
  isArtistsActivated: boolean = false;
  isAlbumsActivated: boolean = false;

  constructor(private router: Router) {}

  Playlists() {
    this.router.navigate(['tab3', 'playlists']);
  }

  Artists() {
    this.router.navigate(['tab3', 'artists']);
  }

  Albums() {
    this.router.navigate(['tab3', 'albums']);
  } 

  
  activatePlaylists() {
    this.isPlaylistsActivated = true;
    this.isArtistsActivated = false;
    this.isAlbumsActivated = false;
  }
  
  activateArtists() {
    this.isPlaylistsActivated = false;
    this.isArtistsActivated = true;
    this.isAlbumsActivated = false;
  }
  
  activateAlbums() {
    this.isPlaylistsActivated = false;
    this.isArtistsActivated = false;
    this.isAlbumsActivated = true;
  }
}