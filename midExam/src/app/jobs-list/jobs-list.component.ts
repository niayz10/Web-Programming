import { Component, OnInit } from '@angular/core';

import { Job } from '../Job'
import { JobsServiceService } from '../jobs-service.service' 
@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  jobs:Job[]
  constructor(private jobSer:JobsServiceService) { }

  ngOnInit(): void {
  this.getJobs();
  }
getJobs(){
  this.jobSer.getJob().subscribe(jobs =>this.jobs=jobs);
}
}
