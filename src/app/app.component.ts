import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import olMap from 'ol/Map';
import olView from 'ol/View';
import olLayerTile from 'ol/layer/Tile';
import olLayerVector from 'ol/layer/Vector';
import olSourceXYZ from 'ol/source/XYZ';
import olSourceVector from 'ol/source/Vector';
import { fromLonLat } from 'ol/proj';
import GeometryType from 'ol/geom/GeometryType';

import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import CircleStyle from 'ol/style/Circle';

import { NgxOlUploadOverlayService } from './ngx-ol-upload-overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('container') container: ElementRef;

  private map: any;
  private layers: any[] = [];

  private accessToken: string = 'pk.eyJ1Ijoiam9ubnl0b3NoZW4iLCJhIjoiY2ozeHJreHllMDA0cjJ3bXhkYjlnaDl5eCJ9.VYbgk1Z2yUiDV5Z9_TGwTg';

  constructor(
    private uploadOverlay: NgxOlUploadOverlayService
  ) {}

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

  private createEditingStyle() {
    const styles = {};
    const white = [255, 255, 255, 1];
    const blue = [0, 153, 255, 1];
    const width = 3;
    styles[GeometryType.POLYGON] = [
      new Style({
        fill: new Fill({
          color: [255, 255, 255, 0.5]
        })
      }),
      new Style({
        stroke: new Stroke({
          color: white,
          width: width + 2
        })
      }),
      new Style({
        stroke: new Stroke({
          color: blue,
          width: width
        })
      })
    ];
    styles[GeometryType.MULTI_POLYGON] =
        styles[GeometryType.POLYGON];
  
    styles[GeometryType.LINE_STRING] = [
      new Style({
        stroke: new Stroke({
          color: white,
          width: width + 2
        })
      }),
      new Style({
        stroke: new Stroke({
          color: blue,
          width: width
        })
      })
    ];
    styles[GeometryType.MULTI_LINE_STRING] =
        styles[GeometryType.LINE_STRING];
  
    styles[GeometryType.CIRCLE] =
        styles[GeometryType.POLYGON].concat(
          styles[GeometryType.LINE_STRING]
        );
  
  
    styles[GeometryType.POINT] = [
      new Style({
        image: new CircleStyle({
          radius: width * 2,
          fill: new Fill({
            color: blue
          }),
          stroke: new Stroke({
            color: white,
            width: width / 2
          })
        }),
        zIndex: Infinity
      })
    ];
    styles[GeometryType.MULTI_POINT] =
        styles[GeometryType.POINT];
  
    styles[GeometryType.GEOMETRY_COLLECTION] =
        styles[GeometryType.POLYGON].concat(
          styles[GeometryType.LINE_STRING],
          styles[GeometryType.POINT]
        );
  
    return styles;
  }

  private getDefaultStyleFunction() {
    const styles = this.createEditingStyle();
    return function(feature, resolution) {
      return styles[feature.getGeometry().getType()];
    };
  }

  private setViewToLayer(layer): void {
    const extent = layer.getSource().getExtent();
    const view = this.map.getView();
    view.fit(extent, {
      duration: 1000
    });
  }

  private addLayerByFeatures(features: any[]): void {
    const layer = new olLayerVector({
      source: new olSourceVector({
        features
      }),
      style: this.getDefaultStyleFunction()
    });
    this.layers.push(layer);
    this.map.addLayer(layer);
    this.setViewToLayer(layer);
  }

  private removeAllLayers(): void {
    for(let i = 0; i < this.layers.length; i++) {
      this.map.removeLayer(this.layers[i]);
    }
    this.layers = [];
  }

  private actionUpload(): void {
    const overlay = this.uploadOverlay.open({
      title: 'Openlayers Drag And Drop',
      width: '768px',
      maskClosable: false
    });
    overlay.afterClose.subscribe(result => {
      if(result) {
        this.addLayerByFeatures(result);
      }
    });
  }

  private actionRemove(): void {
    this.removeAllLayers();
  }

}
