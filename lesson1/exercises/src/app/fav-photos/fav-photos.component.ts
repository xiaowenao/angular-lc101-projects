import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here are my favoriate photos for 2020';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2020/06/u4yu8yiu3861323-1024x576.jpg';
  image3 = 'https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2020/06/u4yu8yiu3861324-1024x576.jpg';

  constructor() { }

  ngOnInit() {
  }

}