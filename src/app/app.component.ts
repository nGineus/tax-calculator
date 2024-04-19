import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../services/api.service';
// import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('');
    // this.apiService
    //   .getTaxConfig()
    //   .pipe(switchMap(taxConfig => this.apiService.getTaxInfo(9000, taxConfig)))
    //   .subscribe(model => {
    //     console.log('MODEL', model);
    //   });
  }
}
