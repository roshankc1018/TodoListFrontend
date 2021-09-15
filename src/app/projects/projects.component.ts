import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllDataService } from '../services/all-data.service';
import { DataService } from '../services/data.service';

export interface ProjectData {
  taskname: string;
  assignto: string;
  hours: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  gridData: ProjectData[] = [];

  projectid = '';
  projectname = '';
  totalhours = 0;

  constructor(private dataService: DataService, private alldata: AllDataService) {}

  ngOnInit(): void {
    this.dataService.projectname.subscribe(name => {
      console.log(name);
      this.projectname = name;
      if (name == 'Angular Updates') this.projectid = '3';
      else if (name == 'Websocket Updates') this.projectid = '2';
      else if (name == 'E-commerce Website') this.projectid = '1';
    });

    this.getprojectData(this.projectid);
  }

  getprojectData(id: string) {
    console.log(this.projectid);
    this.alldata.getProjectsDataByid(this.projectid).subscribe(
      (response: any[]) => {
        this.gridData = response;
        console.log(this.gridData);
        for (let i = 0; i <= this.gridData.length; i++) {
          this.totalhours += +this.gridData[i].hours;
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
