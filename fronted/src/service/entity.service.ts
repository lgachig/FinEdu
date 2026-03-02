import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, forwardRef } from '@angular/core';
import { apiServer } from '../apiServer';


@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private apiUrl: string = apiServer.serverUrl;

  constructor(
    @Inject(forwardRef(() => EntityService)) private entityService: EntityService, private http: HttpClient
  ) {}


  getAll(entityName: string) {

    return this.http.get(`${this.apiUrl}/${entityName}`);
  }
}
