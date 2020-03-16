import { Component, OnInit } from '@angular/core';

import { Job } from '../Job'
import { JobsServiceService } from '../jobs-service.service' 
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
 job:Job;
  constructor(private jobSer:JobsServiceService, private r:ActivatedRoute) { }

  ngOnInit(): void {
    this.getJobDet();
  }
getJobDet(){
  let id= this.r.snapshot.paramMap.get('id');
  this.jobSer.getJobDet(id).subscribe( job =>this.job=job )
}
plus(){
  this.job.like_count++;
}
}
