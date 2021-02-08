
import { Component, OnInit } from '@angular/core';
import { faUser , faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser = faUser
  faSearch = faSearch
  constructor() { }

  ngOnInit(): void {
  }

}
