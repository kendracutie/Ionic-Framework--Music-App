import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  items = [
    { title: 'If He Wanted To He Would', artist: 'Kylie Morgan', cover: 'ac1.jpg' , isSelected: false  },
    { title: 'Everytime', artist: 'Britney Spears', cover: 'ac2.jpg', isSelected: false },
    { title: 'Right Here Waiting', artist: 'Richard Marx', cover: 'ac3.jpg', isSelected: false   },
    { title: 'What is Love?', artist: 'TWICE', cover: 'ac4.jpg' },
    { title: 'Seven', artist: 'Jungkook', cover: 'ac5.jpg' },
    { title: "AS IF IT'S YOUR LAST", artist: 'BLACKPINK', cover: 'ac6.jpg' },
    { title: 'All or Nothing', artist: 'O-Town', cover: 'ac7.jpg' },
    { title: 'All I Want', artist: 'Olivia Rodrigo', cover: 'ac8.jpg' },
    { title: 'KLWKN', artist: 'Music Hero', cover: 'ac9.jpg' },
    { title: 'Huling Sandali', artist: 'December Avenue', cover: 'ac10.jpg' },
    { title: 'Eroplanong Papel', artist: 'December Avenue', cover: 'ac11.jpg' },
    { title: 'Lihim', artist: 'Arthur Miguel', cover: 'ac12.jpg' },
    { title: 'Pano', artist: 'Zack Tabudlo', cover: 'ac13.jpg' },
    { title: 'Muli', artist: 'Ace Banzuelo', cover: 'ac14.jpg' },
    { title: 'Crazy for You', artist: 'Madonna', cover: 'ac15.jpg' },
    { title: 'Isang Linggong Pag-ibig', artist: 'Imelda Papin', cover: 'ac16.jpg' },
    { title: 'Love Yourself', artist: 'Justin Bieber', cover: 'ac17.jpg' },
    { title: 'Somewhere Only We Know', artist: 'Keane', cover: 'ac18.jpg' },
    { title: 'All You Need To Know', artist: 'Gryffin and SLANDER', cover: 'ac19.jpg' },
    { title: 'All I Ever Need', artist: 'Austin Mahone', cover: 'ac20.jpg' },
    // Add more options as needed
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
