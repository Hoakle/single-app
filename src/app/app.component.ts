import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog de fou';
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private searchService: SearchService) {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  searchArticle() {
    const formModel = this.searchForm.value;

    this.searchService.searchArticles(formModel.query);
    this.router.navigateByUrl('/search');
    
  }
}
