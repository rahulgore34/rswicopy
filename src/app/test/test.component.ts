import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  obj = [{ item: 'Detol', item_price: 50, quantity: 0, total: function () { return this.item_price * this.quantity; } },
  { item: 'Cinthol', item_price: 30, quantity: 0, total: function () { return this.item_price * this.quantity; } },
  { item: 'Santoor', item_price: 40, quantity: 0, total: function () { return this.item_price * this.quantity; } }
  ];
  finalTotal = 0;

  constructor() { }

  ngOnInit() {

  }
  fun() {
    let sum = 0;
    let res;
    res = this.obj.forEach((item) => {
      return sum = sum + item.total();
    });
    this.finalTotal = sum;
  }


}
