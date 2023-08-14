import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  currentIndex: number = -1;
  images: string[] = ["1690012310718.jpg", "1690012634836.jpg", "1683616262211.jpg", "1690012393062.jpg", "1690012464140.jpg", "1690012464164.jpg", "1672591394747.jpg", "1690012634822.jpg", "1672591394472.jpg", "1683616262178.jpg", "1683616262226.jpg", "1683616262170.jpg", "1672591394802.jpg", "1672591394490.jpg", "1672591394422.jpg", "1672591394530.jpg", "1672591394760.jpg", "1683616262163.jpg", "1683616262186.jpg", "1672591394772.jpg", "1690012310707.jpg", "1672591394670.jpg", "1672591394717.jpg", "1683616262235.jpg", "1672591394592.jpg", "1672591394406.jpg", "1690012190545.jpg", "1672593392934.jpg", "1683616262202.jpg", "1672591394456.jpg", "1672591394548.jpg", "1690012464150.jpg", "1672591394392.jpg", "1690012310693.jpg", "1672591394578.jpg", "1690012310676.jpg", "1690012310729.jpg", "1690012310681.jpg", "1683616262194.jpg", "1690012464155.jpg", "1683616262139.jpg", "1672593392952.jpg", "1672591394603.jpg", "1672591394731.jpg", "1690012310699.jpg", "1672591394364.jpg", "1672591394510.jpg", "1690012464145.jpg", "1683616262218.jpg", "1672591394623.jpg", "1683616262147.jpg", "1690012310670.jpg", "1672591394379.jpg", "1690012310662.jpg", "1672591394641.jpg", "1672591394440.jpg", "1672591394699.jpg", "1690012310687.jpg", "1672591394561.jpg", "1690012310652.jpg", "1690012464160.jpg", "1683616262155.jpg", "1690012310658.jpg"];
  currentImagePath: string = "";
  lastIndex: number = -1;
  isFirstImage: boolean = false;
  isLastImage: boolean = false;

  // screenWidth: number = screen.width - 500;
  screenWidth: number = 720;

  ngOnInit(): void {
    this.lastIndex = this.images.length - 1;
    this.getImagePath(true);
  }

  getImagePathWithIndex(toNext: boolean, index: number): void {
    let imageName;
    if (index >= 0) {
      this.currentIndex = index;
      imageName = this.images[this.currentIndex];
    } else {
      if (toNext) {
        this.currentIndex++;
      } else {
        this.currentIndex--;
      }
      if (this.currentIndex > this.lastIndex) {
        this.currentIndex = 0;
      }
      if (this.currentIndex < 0) {
        this.currentIndex = this.lastIndex;
      }
      imageName = this.images[this.currentIndex];
    }
    this.currentImagePath = `${environment.pathToAssets}${environment.contextPath}assets/images/${imageName}`;
    this.isFirstImage = this.currentIndex == 0;
    this.isLastImage = this.currentIndex == this.lastIndex;
  }

  getImagePath(toNext: boolean): void {
    this.getImagePathWithIndex(toNext, -1)
  }

  next(): void {
    this.getImagePath(true);
  }

  previous(): void {
    this.getImagePath(false);
  }

  first(): void {
    this.getImagePathWithIndex(false, 0);
  }

  last(): void {
    this.getImagePathWithIndex(false, this.lastIndex);
  }

  getText(): string {
    return '';
  }
}
