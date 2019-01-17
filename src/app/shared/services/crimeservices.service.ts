import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {GRAPH} from '../models/type-graph.enum';
import {WIDGETS} from '../models/type-widgets.enum';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class CrimeservicesService {

  constructor(protected http: Http) {
  }

  getWidgets(widget: WIDGETS): Observable<any> {
    const url = `${environment.baseUrl}/crimeservers/widgets/${widget}`;
    return this.http.get(url)
      .map(response => response.json())
      .catch(e => Observable.throw(e));
  }

  getGraph(graph: GRAPH): Observable<any> {
    const url = `${environment.baseUrl}/crimeservers/main_graph/${graph}`;
    return this.http.get(url)
      .map(response => response.json())
      .catch(e => Observable.throw(e));
  }

  getListCrimeServers() {
    const url = `${environment.baseUrl}/crimeservers/crime_servers_list.json`;
    return this.http.get(url)
      .map(response => response.json())
      .catch(e => Observable.throw(e));
  }

  getCrimeServersId(id) {
    const url = `${environment.baseUrl}/crimeservers/crime_servers_detail.json`;
    return this.http.get(url, {params: {id: id}})
      .map(response => response.json())
      .catch(e => Observable.throw(e));
  }
}
