import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from './Job'
import { jobs } from './jobs'
@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  constructor() { }
  getJob():Observable<Job[]>{
    return of(jobs);
  }
 getJobDet(id:string):Observable<Job>{
   for(let i=0;i<jobs.length;i++){
     if(jobs[i].id==id){
       return of(jobs[i]);
     }
   }
 }
}
