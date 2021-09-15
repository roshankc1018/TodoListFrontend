import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  projectname = this.messageSource.asObservable();

  private nameSource = new BehaviorSubject('default message');
  name = this.nameSource.asObservable();
  constructor() {}

  getProjectName(message: string) {
    this.messageSource.next(message);
  }

  getname(message: string) {
    this.nameSource.next(message);
  }
}
