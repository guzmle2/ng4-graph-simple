import {Observable} from 'rxjs';

export class CrimeservicesStub {


  constructor() {
  }

  getWidgets(): Observable<any> {
    return Observable.of(
      []
    );
  }

  getGraph(): Observable<any> {
    return Observable.of(
      []
    );
  }


  getListCrimeServers(): Observable<any> {
    return Observable.of(
      []
    );
  }

  getCrimeServersId(): Observable<any> {
    return Observable.of(
      []
    );
  }

  getSparksFilter(): Observable<any> {
    return Observable.of(
      [
        {
          'id': '56d073f982df410a3b000000',
          'title': 'Performing automated Yara Q&A with Cuckoo',
          'description': 'Cuckoo Sandbox don’t include a feature that allow you to test how accurate yo' +
          'ur Yara rules are. For this reason, we developed yaraqa.py, a python code that will let you test' +
          ' your own Yara rulesets in a flexible and customizable way.\n\nTo know more about how it works and get' +
          ' the code visit: https://www.blueliv.com/research/performing-automated-yara-qa-with-cuckoo',
          'tlp': 'white',
          'created_at': '2016-02-26T16:49:13.464+01:00',
          'likes_count': 1,
          'spark_created_at': null,
          'source_url': [],
          'weight': 0,
          'geo_domains': {
            'count': 0,
            'data': []
          },
          'geo_ips': {
            'count': 0,
            'data': []
          },
          'geo_points': [],
          'resparks_count': 0,
          'iocs_counters': {
            'HASH': 0,
            'IPv4': 0,
            'URL': 1,
            'CVE': 0,
            'DOMAIN': 0,
            'HOST': 0,
            'TOTAL': 1
          },
          'tags': [
            'YARA',
            'YARAQA',
            'CUCKOO',
            'BLOG'
          ],
          'user': {
            'id': '56cc457682df4161e3000000',
            'username': 'Blueliv',
            'first_name': 'Blueliv',
            'last_name': ' ',
            'karma': 3734,
            'badge': 'rockstar'
          }
        }
      ]
    );
  }

}
