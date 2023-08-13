import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  type: string | undefined;
  price: number | undefined;
  winter_wheel: string | undefined;
  summer_wheel: string | undefined;

  changeOption(): void {
    if (this.type == '1') {
      this.price = 4600;
      this.winter_wheel = `${environment.pathToAssets}/assets/images/1672591394379.jpg`;
      this.summer_wheel = undefined;
    }
    else if (this.type == '2') {
      this.price = 4900;
      this.winter_wheel = undefined;
      this.summer_wheel = `${environment.pathToAssets}/assets/images/1690012430556.jpg`;
    }
    else if (this.type == '3') {
      this.price = 5100;
      this.winter_wheel = `${environment.pathToAssets}/assets/images/1672591394379.jpg`;
      this.summer_wheel = `${environment.pathToAssets}/assets/images/1690012430556.jpg`;
    } else {
      this.price = undefined;
      this.winter_wheel = undefined;
      this.summer_wheel = undefined;
    }
  }
}
