import {Component} from '@angular/core';
import {CommonServiceService} from "../../services/common-service.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(public commonServiceService: CommonServiceService) {
  }

}
