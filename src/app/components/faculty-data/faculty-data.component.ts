import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../../api-faculty.service';

@Component({
  selector: 'app-faculty-data',
  templateUrl: './faculty-data.component.html',
  styleUrl: './faculty-data.component.css'
})
export class FacultyDataComponent {
  faculty:any={};
  id:any=null;
  constructor(private _activatedRoute:ActivatedRoute,private _api:ApiFacultyService,private _router:Router){}

  ngOnInit() {
    this.id= this._activatedRoute.snapshot.paramMap.get('id');
    this._api.getFacultyByID(this.id).subscribe((res:any)=>{
      console.log("Faculty retrieved");
      this.faculty=res;
    })
  }
  deleteFaculty(id:any) {
    {
      this._api.deleteFacultyByID(this.id).subscribe((res:any)=>{
        this._router.navigate(['./']);
        console.log("Faculty deleted");
        
      })
    } 
  }

  backButton(){
    this._router.navigate(['./']);
  }

  updateButton(id:any) {
    {
      this._router.navigate(['./UpdateFaculty/',this.id]);
    }
  }
}
