import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Article } from '../models/article';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent implements OnInit {

  article$: Observable<Article>;
  article: Article;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.articleService.getArticleById(parseInt(params.get('id'), 10)))
    );

    this.article$.subscribe(article => {
      this.article = article;
    });
  }

  delete(article : Article) {
    this.articleService.deleteArticles(article.id).subscribe(articles => {
      this.router.navigateByUrl('articles');
    });
  }

}
