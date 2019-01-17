import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers} from '@angular/http';

@Injectable()
export class BluelivSparksService {

  static URL_BACKEND = 'https://community.blueliv.com/api/v1';

  getHeader() {
    return new Headers({
      'Authorization': 'Token aa9e8fc3-55f6-4001-aa5f-cd796e93652c',
      'Content-Type': 'application/json; charset=utf-8',
      'Accepts': 'application/json'
    });
  }

  constructor(private http?: Http) {

  }


  getSparksFilter(filter?, value?): Observable<any> {

    const url = `${BluelivSparksService.URL_BACKEND}/search/sparks`;
    return this.http.get(url, {headers: this.getHeader(), params: {filter, value}})
      .map((response: any) => {
        const data = response.json();
        return data.map(o => {
          return {
            created_at: o.created_at,
            title: o.title,
            tags: o.tags,
            iocs_counters: o.iocs_counters
          };
        });
      })
      .catch(e => Observable.throw(e));
  }
}
