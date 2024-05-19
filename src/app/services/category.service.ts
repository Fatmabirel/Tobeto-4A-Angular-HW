import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:7076/api/Categories/";

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ListResponseModel<Category>>{
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Category>>(newPath)
  }

  update(category: Category): Observable<ListResponseModel<Category>>{
    let newPath = this.apiUrl + "Update";
    return this.httpClient.post<ListResponseModel<Category>>(newPath,category)
  }
}
