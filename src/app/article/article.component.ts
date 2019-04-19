import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deletedArticle.emit(this.article);
  }
}
