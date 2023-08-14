import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {VideosComponent} from "./components/videos/videos.component";
import {InfoComponent} from "./components/info/info.component";
import {PriceComponent} from "./components/price/price.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'info', component: InfoComponent},
  {path: 'price', component: PriceComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
