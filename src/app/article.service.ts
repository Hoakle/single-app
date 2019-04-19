import { Injectable } from '@angular/core';
import { Article } from './models/article';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { RawArticle } from './models/rawArticle';

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public deleteArticles(id): Observable<Article[]> {
    return this.http.delete<Article[]>("http://localhost:3000/articles/" + id);
  }

  public createArticle(article: RawArticle): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles/", article);
  }

  public getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/" + id);
  }
}
