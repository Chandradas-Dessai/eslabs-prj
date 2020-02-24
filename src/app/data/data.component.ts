import { Component, OnInit } from '@angular/core';
import { Observable, from  } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  alldata: any;
  singleData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.listData();
  }

  listData(){
    this.dataService.getData().subscribe(data =>{
      this.alldata = data;
      console.log(this.alldata);
    })
  }

  loadDataToView(dId: string, data:any){ 
      this.singleData = data;
  }

}
