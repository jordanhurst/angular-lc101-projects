import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://i.imgflip.com/2103a6.jpg';
  image2 = 'https://i.guim.co.uk/img/media/93414e218a749b0d0edd7c64630e3c86214735fd/0_597_1324_794/master/1324.jpg?width=1200&quality=85&auto=format&fit=max&s=254c919cac0e1e0822313d7124449dde';
  image3 = 'https://images-na.ssl-images-amazon.com/images/I/81gcNrUi7KL.jpg';

  constructor() { }

  ngOnInit() {
  }

}