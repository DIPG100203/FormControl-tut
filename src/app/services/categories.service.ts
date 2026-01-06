import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interface/category';
import { Env } from '../enviorement/env';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    return this.http.get<Category[]>(`${Env.url_api}/categories`)
  }

  createCategory(data: Partial<Category>) {
    return this.http.post<Category>(`${Env.url_api}/categories`, data)
  }

  updateCategory(id: string, data: Partial<Category>) {
    return this.http.put<Category>(`${Env.url_api}/categories/${id}`, data)
  }
}
