import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = "https://www.linkedin.com/in/maithe-de-souza/";
  opportunities: boolean = true;
  urlImage = "http://estantedasala.com/wp-content/uploads/2014/11/interstellar.jpg";
  urlImage2 = "https://popcornusa.s3.amazonaws.com/movies/650/2612-11621-RalphBre.jpg";
  urlImage3 = "https://m.media-amazon.com/images/I/81wl0PL9A-L._AC_SL1500_.jpg";

  valueSave = ' ';
  name = 'Maithê';

  courseName = 'Angular';

  inicialValue = 7;

  openToOpportunities() {
    return true;
  }

  button() {
    alert('Clicked');
  }

  saveValue(value: any) {
    this.valueSave = value;
  }

  onValueChange(event: any) {
    console.log(event.newValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
