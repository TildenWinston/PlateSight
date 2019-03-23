import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate-database',
  templateUrl: './plate-database.component.html',
  styleUrls: ['./plate-database.component.css']
})
export class PlateDatabaseComponent implements OnInit {
  platedata;
  
  constructor() { }

  ngOnInit() {
      this.platedata = {"platesDetected": [
        {
            "plate" : "FSADE-5453",
            "date" : "3/23/2019",
            "violate" : false,
            "messageSent" : false
    
        },
        {
            "plate" : "FS434DE-5453",
            "date" : "3/23/2019",
            "violate" : true,
            "messageSent" : false
    
        },
        {
            "plate" : "FSADE-5453",
            "date" : "3/23/2019",
            "violate" : true,
            "messageSent" : true
    
        },
        ]
    };
      console.log(this.platedata);
  }

  
}
