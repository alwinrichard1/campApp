import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {

  }
  title = 'campApp';
  places = [
    {
      name: 'Alappuzha',
    },
    {
      name: 'Ernakulam',
    },
    {
      name: 'Idukki',
    },
    {
      name: 'Kannur',
    },
    {
      name: 'Kasaragod',
    },
    {
      name: 'Kollam',
    },
    {
      name: 'Kottayam',
    },
    {
      name: 'Kozhikode',
    },
    {
      name: 'Malappuram',
    },
    {
      name: 'Palakkad',
    },
    {
      name: 'Pathanamthitta',
    },
    {
      name: 'Thiruvananthapuram',
    },
    {
      name: 'Thrissur',
    },
    {
      name: 'Wayanad',
    }
  ];

  ngOnInit() {

  }

  getSelectedData(data: any) {
    alert();
    console.log(data.value);
  }

}
