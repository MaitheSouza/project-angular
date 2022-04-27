import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value = 0;

  @Output() valueChange = new EventEmitter();

  add() {
    this.value++;
    this.valueChange.emit({ newValue: this.value });
  }

  remove() {
    this.value--;
    this.valueChange.emit({ newValue: this.value });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
