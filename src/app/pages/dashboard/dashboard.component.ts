import {Component, OnInit} from '@angular/core';
import {CrimeservicesService} from '../../shared/services/crimeservices.service';
import {GRAPH} from '../../shared/models/type-graph.enum';
import {WIDGETS} from '../../shared/models/type-widgets.enum';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'blv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  widtges = [];
  graphic: any;
  typeGraph = new Subject();
  lineChartColors: Array<any> = [
    { // dark grey
      backgroundColor: 'transparent',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointHoverBackgroundColor: '#fff',
    }
  ];

  optionGrpah = {
    responsive: true,
    scales: {
      yAxes: [
        { ticks: { min: 0, stepValue : 5 } }
      ]
    }
  };


  constructor(protected crimeservers: CrimeservicesService) {
  }

  ngOnInit() {
    const widgets = Object.keys(GRAPH).map(key => ({name: key, value: WIDGETS[key]}));
    for (const w of widgets) {
      this.initWidgets(w.value, w.name);
    }

    this.typeGraph.subscribe(e => this.getGraph(e));
  }

  initWidgets(widget, name?) {
    this.crimeservers.getWidgets(widget).subscribe(
      result => {
        this.widtges.push({
          name: name,
          data: result.data
        });
      }, e => console.log(e));
  }

  getGraph(value) {
    this.crimeservers.getGraph(<GRAPH>GRAPH[value])
      .subscribe(result => {
        if (result) {
          this.graphic = <any>{
            name: value,
            data: result.data.map(a => a.attributes.count),
            labels: result.data.map(a => a.attributes.date)
          };
        }
      }, e => console.log(e));
  }

}
