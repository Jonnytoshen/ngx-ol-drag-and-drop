import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import olMap from 'ol/Map';
import olView from 'ol/View';
import olLayerTile from 'ol/layer/Tile';
import olSourceXYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('container') container: ElementRef;

  map: any;

  private accessToken: string = 'pk.eyJ1Ijoiam9ubnl0b3NoZW4iLCJhIjoiY2ozeHJreHllMDA0cjJ3bXhkYjlnaDl5eCJ9.VYbgk1Z2yUiDV5Z9_TGwTg';

  constructor() {}

  ngOnInit() {
    this.mapBuilder(this.container.nativeElement);
  }

  private mapBuilder(target: HTMLElement): void {
    this.map = new olMap({
      target,
      view: new olView({
        center: fromLonLat([116.39122009277342, 39.90710270565395]),
        zoom: 8
      }),
      layers: [
        new olLayerTile({
          source: new olSourceXYZ({
            url: `https://b.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${this.accessToken}`
          })
        })
      ],
      controls: []
    });
  }

  private actionUpload(): void {

  }

  private actionRemove(): void {

  }

}
