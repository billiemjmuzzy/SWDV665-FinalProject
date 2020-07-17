import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

export interface Data {
  scorecard: string;
}

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScorecardPage implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(private http: HttpClient) { 
    this.columns = [
      { name: 'Hole' },
      { name: 'Championship' },
      { name: 'Men Yards' },
      { name: 'Lady Yards' },
      { name: 'Handicap' },
      { name: 'Par'}
    ];
    this.http.get<Data>('../../assets/scorecard.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.scorecard;
      });
  }

  ngOnInit() {
  }

}
