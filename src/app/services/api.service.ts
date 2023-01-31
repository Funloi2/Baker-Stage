import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../Environment/environment";

@Injectable({
  providedIn: 'root'
})


export class ApiService {


  private URL_Company = environment.COMPANY_API;
  constructor(private http : HttpClient) { }

  postCompany(data: any, httpOptions: { headers: HttpHeaders }){
    return this.http.post<any>(this.URL_Company + "/postCompany", data, httpOptions);
  }

  getCompany(httpOptions: { headers: HttpHeaders }){
    return this.http.get<any>(this.URL_Company + "/getCompany", httpOptions);
  }

  updateCompany(data: any, id: number, httpOptions: { headers: HttpHeaders }){
    return this.http.put<any>("http://localhost:3000/companyList/" + id, data, httpOptions);
  }
  deleteCompany(id : number){
    return this.http.delete<any>("http://localhost:3000/companyList/" + id);
  }
}
