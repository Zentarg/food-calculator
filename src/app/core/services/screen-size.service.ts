import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  constructor() { }

  private maxMobileWidth: number = 599;
  private minTabletPortraitWidth: number = 600;
  private minTabletLandscapeWidth: number = 900;
  private minDesktopWidth: number = 1200;
  private minBigDesktopWidth: number = 1800;


  get IsMobile(): boolean {
    return window.innerWidth < this.maxMobileWidth;
  }

  get tabletPortraitUp(): boolean {
    return window.innerWidth > this.minTabletPortraitWidth;
  }

  get tabletLandscapeUp(): boolean {
    return window.innerWidth > this.minTabletLandscapeWidth;
  }

  get desktopUp(): boolean {
    return window.innerWidth > this.minDesktopWidth;
  }

  get bigDesktopUp(): boolean {
    return window.innerWidth > this.minBigDesktopWidth;
  }

}
