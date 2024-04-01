import { Component, OnInit } from '@angular/core';
import { ApiFacultyService } from '../../api-faculty.service';
import {  Router  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{



  //this array for get all the objects of an apis array.
  //and this array is the oabject of an array.
  faculalty:any;
  constructor(private _api:ApiFacultyService,private _router:Router) { }

  ngOnInit() {
    this._api.getAllFaculties().subscribe((res:any)=>{
      console.log("Faculties retrieved");
      this.faculalty=res;
    })

   
  }
  viewData(id :any) {
    this._router.navigate(['./facultyData/',id]);
    console.log(id);
  }
}
