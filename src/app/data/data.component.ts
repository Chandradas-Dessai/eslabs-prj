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
  allYardsData: any;
  singleData: any;
  yardNames: string[];
  stackNames: string[];
  modifData = {};
  clicked:boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.listYards();
  }

  listYards(){
    this.yardService.getYards().subscribe(data =>{
      this.allYardsData = data;
   
       // Get all yards and stacks
      const yard =  this.allYardsData.map(data => data.YardName);
      const stack = this.allYardsData.map(data => data.StackName);

      // Filter Unique yards and stacks
      this.yardNames = yard.filter((x, i, a) => x && a.indexOf(x) === i);
      this.stackNames = stack.filter((x, i, a) => x && a.indexOf(x) === i);


    });
  }

  loadDataToView(dId: string, data:any){ 
    this.clicked = true;

    this.singleData = data;
  }

  closePanel(){
    this.clicked = false;
  }

}
