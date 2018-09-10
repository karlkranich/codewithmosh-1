import { Component, OnInit } from '@angular/core';
import { AuthorsvcService } from '../authorsvc.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  heading;

  constructor(service: AuthorsvcService) {
    this.authors = service.getAuthors();
    this.heading = `${this.authors.length} Authors:`;
  }

  ngOnInit() {
  }

}
