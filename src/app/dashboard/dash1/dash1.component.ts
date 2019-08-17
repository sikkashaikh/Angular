import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../core/http/base.service';
import { MessageService } from 'primeng/api';
import { uri } from 'src/app/common/services/constant'

@Component({
  selector: 'app-dash1',
  templateUrl: './dash1.component.html',
  styleUrls: ['./dash1.component.css']
})
export class Dash1Component implements OnInit {

  constructor(private http: BaseService, private messageService: MessageService) { }

  ngOnInit() {
    //this.connectServer();
  }

  public connectServer() {
    this.http.getData(uri.Users).subscribe((data: any) => {
      if (data.length > 0) {
        console.log(data);
      }
      else {
        console.log("no data found");
      }
    }, error => {
      console.log("error");
    });
  }



}
