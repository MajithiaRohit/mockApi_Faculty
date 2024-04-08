import { Component } from '@angular/core';
import { ApiFacultyService } from '../../api-faculty.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrl: './add-faculty.component.css'
})
export class AddFacultyComponent {
  id:number = -1;
  // facultyData:FacultyModel =new FacultyModel()
  facultyData:any={
    facultyID:"",
    facultyName:"",
    facultyImage:"",
    facultyEmail:"",
    facultyPhone:"",
    facultyCity:""
  };
  constructor(private _api:ApiFacultyService,private _router:Router,private _activatedRoute: ActivatedRoute){
  }
  ngOnInit() {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    if(this.id !== null){
      this._api.getFacultyByID(this.id).subscribe(res=>{
        console.log('data fatched');
        this.facultyData = res;
      })
    }

  }
  formSubmit(AddFacultyForm:any){
    if(this.id == null){
      this._api.insertFaculty(AddFacultyForm).subscribe((res:any)=>{
        console.log(AddFacultyForm);
        this.facultyData = res;
        this._router.navigate(['/']);
      })
    }
    else{
      this._api.updateFaculty(this.id,AddFacultyForm).subscribe((res:any)=>{
        console.log("faculty Update Sucessfuly...");
        this.facultyData = res;
        this._router.navigate(['/']);
      })
    }
   
  }
}
