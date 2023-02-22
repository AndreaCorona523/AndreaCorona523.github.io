import { Component } from '@angular/core';
import { faEnvelope, faPhone, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  emailIcon = faEnvelope;
  phoneIcon = faPhone;
  locationIcon = faLocationDot;
  userIcon = faUser;

}
