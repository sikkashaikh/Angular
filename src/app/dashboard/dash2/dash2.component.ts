import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../core/http/base.service';
import { uri } from 'src/app/common/services/constant'
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-dash2',
  templateUrl: './dash2.component.html',
  styleUrls: ['./dash2.component.css']
})
export class Dash2Component implements OnInit {

  cars: Car[];
  cols: any[];

  constructor(private http: BaseService) { }

  ngOnInit() {
    //this.getCarsSmall(0, 2); //No need to call autometicaly called by lazy load on page load

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  public getCarsSmall(statrt: number, end: number) {
    var param = '?_start=' + statrt + '&_end=' + end;
    this.http.getData(uri.demoTable + param).subscribe((data: any) => {
      if (data.length > 0) {
        this.cars = data;
      }
      else {
        console.log("no data found");
      }
    }, error => {
      console.log("error");
    });
  }

  loadCarsLazy(event: LazyLoadEvent) {
    this.getCarsSmall(event.first,(event.first + event.rows));
  }
}


export interface Car {
  vin;
  year;
  brand;
  color;
}