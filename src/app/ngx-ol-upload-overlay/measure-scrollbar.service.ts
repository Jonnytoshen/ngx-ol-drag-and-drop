import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MeasureScrollbarService {

  private _scrollbarWidth: number;
  private scrollbarMeasure = {
    position: 'absolute',
    top     : '-9999px',
    width   : '50px',
    height  : '50px',
    overflow: 'scroll'
  };

  get scrollBarWidth(): number {
    if (this.isNotNil(this._scrollbarWidth)) {
      return this._scrollbarWidth;
    }
    this.initScrollBarWidth();
    return this._scrollbarWidth;
  }

  initScrollBarWidth(): void {
    const scrollDiv = this.document.createElement('div');
    for (const scrollProp in this.scrollbarMeasure) {
      if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
        scrollDiv.style[ scrollProp ] = this.scrollbarMeasure[ scrollProp ];
      }
    }
    this.document.body.appendChild(scrollDiv);
    const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.document.body.removeChild(scrollDiv);
    this._scrollbarWidth = width;
  }

  // tslint:disable-next-line:no-any
  constructor(@Inject(DOCUMENT) private document: any) {
    this.initScrollBarWidth();
  }

  private isNotNil(value: any): boolean {
    return (typeof(value) !== 'undefined') && value !== null;
  }

}
