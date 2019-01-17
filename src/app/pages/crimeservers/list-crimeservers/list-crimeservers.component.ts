import {Component, OnInit} from '@angular/core';
import {CrimeservicesService} from '../../../shared/services/crimeservices.service';

@Component({
  selector: 'blv-list-crimeservers',
  templateUrl: './list-crimeservers.component.html',
  styleUrls: ['./list-crimeservers.component.scss']
})
export class ListCrimeserversComponent implements OnInit {

  listCrimeServers: any;


  constructor(protected crimeservers: CrimeservicesService) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.crimeservers.getListCrimeServers()
      .subscribe(result => {
        this.listCrimeServers = result;
      });
  }
}
