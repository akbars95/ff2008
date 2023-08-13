import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {

  videoPath = `${environment.pathToAssets}/assets/videos/VID_20230101_161323.mp4`;

}
