import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  templateUrl: './sales-person-list.html',
  styleUrl: './sales-person-list.css'
})
export class SalesPersonList {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Mourat", "Achoi", "m@g.com", 3000),
    new SalesPerson("Kostas", "Vardakis", "k@g.com", 9001),
    new SalesPerson("Seiran", "Osman", "s@g.com", 9001)
  ];


}
