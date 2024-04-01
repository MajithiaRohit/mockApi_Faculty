import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {
  //this url for getting the data from the mock api.
  apiUrl = "https://65f5c27041d90c1c5e0a1967.mockapi.io/FacultyData";
  
  constructor(private _http:HttpClient) { }

  //this method for getting the data of all the faculties.
  getAllFaculties()
  {
    return this._http.get(this.apiUrl);
  }
  getFacultyByID(id:any)
  {
    return this._http.get(this.apiUrl+"/"+id);
  }

  deleteFacultyByID(id:any)
  {
    return this._http.delete(this.apiUrl+"/"+id);
  }
}
