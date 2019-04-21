import { ArticleService } from './../article.service';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  articles: Article [];

  constructor(private searchService: SearchService, private articleService: ArticleService) { }

  ngOnInit() {
    this.searchService.queryObs.subscribe(query => {
      this.articleService.querySearch(query).subscribe(articles => {
        this.articles = articles;
      })
    })
  }

  delete(article : Article) {
    this.articleService.deleteArticles(article.id).subscribe(articles => {
      this.searchService.queryObs.subscribe(query => {
        this.articleService.querySearch(query).subscribe(articles => {
          this.articles = articles;
        })
      })
    });
  }

}
