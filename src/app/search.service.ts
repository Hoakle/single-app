import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

    private _query = new BehaviorSubject<string>("");
    queryObs = this._query.asObservable();

    constructor() {  }


    searchArticles(query: string) {
        this._query.next(query);
    }

}