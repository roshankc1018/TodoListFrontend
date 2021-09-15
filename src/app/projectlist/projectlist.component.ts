import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllDataService } from '../services/all-data.service';
import { DataService } from '../services/data.service';

export interface neededdata {
  projectname: string;
  userid: string;
  hours: string;
}
export interface Projectdata {
  projectid: string;
  projectname: string;
}

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss'],
})
export class ProjectlistComponent implements OnInit {
  gridData: neededdata[] = [];

  projectdata: Projectdata[] = [];

  userprojectdata: any[] = [];
  outputdata: any[] = [];

  name = '';

  constructor(private alldataService: AllDataService, private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.name.subscribe(name => {
      this.name = name;
    });
    console.log(this.name);
    this.getDataByName(this.name);
  }

  getDataByName(name: string) {
    this.alldataService.getAllUsersAndProjectsByUserId(name).subscribe((res: any[]) => {
      this.gridData = res;
    });
  }

  getProjectnames(id: string) {}

  onSubmit(id: string) {
    this.dataService.getProjectName(id);
    this.router.navigate(['projects']);
  }
}
