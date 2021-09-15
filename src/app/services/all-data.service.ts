import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL: string = 'http://127.0.0.1:8000/api';
export interface User {
  userid: string;
  username: string;
}

export interface Project {
  projectid: string;
  projectname: string;
}

export interface UserAndProject {
  userandprojectid: string;
  userid: string;
  projectid: string;
}

export interface Task {
  taskid: string;
  taskname: string;
  projectid: string;
  userid: string;
  hours: string;
}

export interface GetAllUserAndProjectData {
  projectname: string;
  userid: string;
  hours: string;
}

@Injectable({
  providedIn: 'root',
})
export class AllDataService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + `/users`);
  }

  public getProjectsDataByid(id: string): Observable<Project[]> {
    return this.http.get<Project[]>(API_URL + `/projects/data/` + id);
  }

  public getAllUsersAndProjectsByUserId(id: string): Observable<GetAllUserAndProjectData[]> {
    return this.http.get<GetAllUserAndProjectData[]>(API_URL + `/userandproject/data/` + id);
  }
}
