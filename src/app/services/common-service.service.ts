import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  copySiteAddress(): void {
    navigator.clipboard.writeText("https://akbars95.github.io/ford_fusion_2008/");
  }
}
