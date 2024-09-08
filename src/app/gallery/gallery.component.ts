import { Component, OnInit } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  images: ImageItem[] = [];

  ngOnInit() {
    this.images = [
      new ImageItem({ src: 'photos/harbor.jpg', thumb: 'photos/harbor.jpg' }),
      new ImageItem({ src: 'photos/hotel.jpg', thumb: 'photos/hotel.jpg' }),
      new ImageItem({ src: 'photos/yb13.jpg', thumb: 'photos/yb13.jpg' }),
      new ImageItem({ src: 'photos/iad.jpg', thumb: 'photos/iad.jpg' })
    ];
  }

}
