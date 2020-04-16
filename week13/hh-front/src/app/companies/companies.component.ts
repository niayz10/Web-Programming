import { Component, OnInit } from '@angular/core';

import { VacancyServiceService } from '../vacancy-service.service'
import { Company } from '../Company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
   companies: Company[] = []
   
  constructor(private vser:VacancyServiceService) { }

  ngOnInit(): void {
    this.vser.getCompaines().subscribe(s => this.companies=s)
  }

}
