import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  // components created with the cli will always prefix element selectors with "app-" to minimize the chance of clashing with a compnent coming from a third party library. This does add noise, so unless there is a clear reason to have it, feel free to remove it
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors; 

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
