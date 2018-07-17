import { Injectable } from '@angular/core';
import { Observable, from, of, fromEvent, Observer } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as ShapefileUtil from 'shapefile';

import GPX from 'ol/format/GPX';
import GeoJSON from 'ol/format/GeoJSON';
import IGC from 'ol/format/IGC';
import KML from 'ol/format/KML';
import TopoJSON from 'ol/format/TopoJSON';

export interface Shapefile {
  dbf?: File,
  prj?: File,
  sbn?: File,
  sbx?: File,
  shp: File,
  shx?: File
}

@Injectable({
  providedIn: 'root'
})
export class ReadFilesService {

  private formatConstructors: any[] = [GPX, GeoJSON, IGC, KML, TopoJSON];
  private projection: 'EPSG:4326' | 'EPSG:3857' = 'EPSG:3857';

  constructor() { 
  }

  /**
   * @public
   * @param shapefiles Shapefile
   * @returns Observable<any[]>
   */
  readShapefileAsFeatures(shapefiles: Shapefile): Observable<any> {
    const files: File[] = [shapefiles.shp, shapefiles.dbf];
    return this.readFilesAsArrayBuffer(files).pipe(
      switchMap(result => {
        return from(ShapefileUtil.read(...result)).pipe(
          map(result => {
            const format = new GeoJSON();
            return format.readFeatures(result, {
              dataProjection: 'EPSG:4326',
              featureProjection: 'EPSG:3857'
            });
          }),
          catchError(error => of(error))
        );
      })
    );
  }

  readFilesAsArrayBuffer(files: File[], result: any[] = [], counter: number = 0): Observable<any[]> {
    return this.readAsArrayBuffer(files[counter]).pipe(
      files[counter+1] ? switchMap(data => {
        result[counter] = data;
        counter++;
        return this.readFilesAsArrayBuffer(files, result, counter);
      }) : map(data => {
        result[counter] = data;
        return result;
      })
    );
  }

  readAsArrayBuffer(file: File): Observable<any> {
    if(file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      return fromEvent(reader, 'load').pipe(
        map((event: ProgressEvent) => {
          const target: FileReader = event.target as FileReader;
          return target.result;
        })
      );
    } else {
      return of(null);
    }
  }

  readFilesAsFeatures(files: File[]): Observable < any[] > {
    let counter: number = 0;
    let features: any = [];
    return Observable.create((observer: Observer < any[] > ) => {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.addEventListener('load', (event: ProgressEvent) => {
          const result: any[] = this.handleResult(file, event);
          if (result && result.length > 0) {
            features = [...features, ...result];
          }
          counter++;
          if (counter === files.length) {
            observer.next(features);
            observer.complete();
          }
        });
        reader.readAsText(file);
      }
    });
  }

  private handleResult(file: File, event: ProgressEvent): any[] {
    const fileReader: FileReader = event.target as FileReader;
    const result = fileReader.result;
    let features: any[] = [];
    for (let i = 0; i < this.formatConstructors.length; i++) {
      const formatConstructor = this.formatConstructors[i];
      const format = new formatConstructor();
      features = this.tryReadFeatures(format, result, {
        featureProjection: this.projection
      }) || null;
      if (features && features.length > 0) {
        break;
      }
    }
    return features;
  }

  private tryReadFeatures(format: any, text: any, options: any): any[] {
    try {
      return format.readFeatures(text, options);
    } catch (e) {
      return null;
    }
  }

}
