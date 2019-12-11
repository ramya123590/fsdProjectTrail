import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private baseUrl ='http://localhost:9081/api/branch';
  private  branchUrl='http://localhost:9081/api/branch';

  constructor(private http: HttpClient) { }

  getBranch(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  

  createBranch(branch: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, branch);
  }

  updateBranch(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBranch(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBranchList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


  getAllbranchtNames(): Observable<any> {
    return this.http.get(`http://localhost:9081/api/branch`);
  }
}
