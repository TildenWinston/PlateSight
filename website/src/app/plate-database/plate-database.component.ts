import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-plate-database',
  templateUrl: './plate-database.component.html',
  styleUrls: ['./plate-database.component.css']
})

export class PlateDatabaseComponent implements OnInit {
  platedata;
  public location;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    //this.zipCode = this._route.snapshot.params['zip'];
    //this.country = this._route.snapshot.params['us'];
      console.log(this._route.snapshot.params['id']);
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
            "violate" : false,
            "messageSent" : true
    
        },
        {
          "plate" : "F7809324SADE-5453",
          "date" : "3/23/2019",
          "violate" : false,
          "messageSent" : false
  
      },
        ]
    };
      console.log(this.platedata);
  }

  onSubmit(){
    
    console.log("City: " + this.location);
    
    
  }


}
