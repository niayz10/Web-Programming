import { Component } from '@angular/core';
import { VacancyServiceService } from './vacancy-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged = false;

  username = '';
  password = '';

  constructor(private service: VacancyServiceService) {}

  ngOnInit(){
    let token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  login(){
    this.service.login(this.username, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        this.logged = true;

        this.username = '';
        this.password = '';
      })
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }
}
