import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy'
import { ActivatedRoute } from '@angular/router';
import { VacancyServiceService } from '../vacancy-service.service';


@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private service: VacancyServiceService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('companyID');
    this.service.companyVacancy(id).subscribe(v => this.vacancies = v);
  }

}
