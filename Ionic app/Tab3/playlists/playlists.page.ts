import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';


import { AddPlaylistsModalPage } from './add-playlists-modal/add-playlists-modal.page';


export class Playlist {
  selected: unknown;

  constructor(public name: string, public editMode: boolean = false) {}
}


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.page.html',
  styleUrls: ['./playlists.page.scss'],
})
export class PlaylistsPage {

  playlists: Playlist[] = [];
  isEditMode: boolean = false;
  isMainEditMode: boolean = false;
  playlistsCreated: number = 0;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,   

  ) {}
  //for creatingplaylist//
  async openPlaylistAlert() {
    const alert = await this.alertController.create({
      header: 'Create Playlist',
      inputs: [
        {
          name: 'playlistName',
          type: 'text',
          value: 'Playlist 001',
          placeholder: 'Enter playlist name',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          },
        },
        {
          text: 'Create',
          handler: (data) => {
            this.addPlaylist(data.playlistName);
            this.openAddPlaylistsModal();
            this.playlistsCreated++;
    
            this.updateMainEditMode();
          },
        },
      ],
    });

    await alert.present();
  }

  private addPlaylist(name: string) {
    const newPlaylist = new Playlist(name || 'Playlist 001');
    this.playlists.push(newPlaylist);
  }


//modal for choosing songs from add-playlist-modal//
  private async openAddPlaylistsModal() {
    const modal = await this.modalController.create({
      component: AddPlaylistsModalPage,
      componentProps: {
        playlists: this.playlists,
      },
    });

    await modal.present();
  }

//sliding item delete//
  async openDeletePlaylistAlert(index: number) {
    const alert = await this.alertController.create({
      header: 'Delete Playlist',
      message: `Are you sure you want to delete "${this.playlists[index].name}"?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          },
        },
        {
          text: 'Delete',
          handler: () => {
            this.deletePlaylist(index);
            this.playlistsCreated = this.playlists.length;
            this.isMainEditMode = false;
            this.updateMainEditMode();
          },
          
        },
      ],
    });

    await alert.present();
  }

  private deletePlaylist(index: number) {
    this.playlists.splice(index, 1);
  }
  

//editPlaylist and save for sliding item//  
  editPlaylistName(index: number) {
    this.playlists.forEach((playlist, i) => (playlist.editMode = i === index));
    this.playlistsCreated = this.playlists.length;
    this.updateMainEditMode();
  }

  savePlaylistName(index: number) {
    this.playlists[index].editMode = false;
  }


//for delete choosing songs//
  private updateMainEditMode() {

    const initialPlaylistCount = this.playlists.length;

    if (this.playlistsCreated >= 2) {
      this.isMainEditMode = true;
    } else if (initialPlaylistCount >= 2) {
      this.isMainEditMode = false;
  }

}


//for selecting all songs to delete//
  selectAllPlaylists() {
    this.playlists.forEach((playlist) => (playlist.selected = true));

  }


  toggleEditMode() {
    //for button delete,all and cancel//
    this.isEditMode = !this.isEditMode;
    //for button icon trash//
    this.isMainEditMode = !this.isMainEditMode;
  }

  
 //Delete selected playlists//
  async deleteSelectedPlaylists() {   
    const selectedPlaylists = this.playlists.filter((playlist) => playlist.selected);
  
    if (selectedPlaylists.length > 0) {
      const alert = await this.alertController.create({
        header: 'Delete Playlists',
        message: 'Are you sure you want to delete all selected playlists?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancelled');
            },
          },
          {
            text: 'Delete',
            handler: () => {
              selectedPlaylists.filter((playlist) => {
                const index = this.playlists.indexOf(playlist);
                this.deletePlaylist(index);
              });

              this.playlistsCreated = this.playlists.length;

              this.isEditMode = false;
              this.updateMainEditMode();
            },
          },
        ],
      });
  
      await alert.present();
    }
  }

}
