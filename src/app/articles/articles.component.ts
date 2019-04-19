import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  protected articles: Article [];

  constructor(private articleService: ArticleService) { 

  }

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

  delete(article : Article) {
    this.articleService.deleteArticles(article.id).subscribe(articles => {
      this.loadArticles();
    });
  }

}
