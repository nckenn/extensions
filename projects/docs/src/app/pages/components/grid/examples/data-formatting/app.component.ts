import { Component } from '@angular/core';
import { EXAMPLE_DATA } from '../../data';
import { MtxGridColumn } from '@ng-matero/extensions/grid';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columns: MtxGridColumn[] = [
    {
      header: 'Name',
      field: 'name',
      formatter: (data: any) => `<span class="label">${data.name}</span>`,
    },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];

  list = EXAMPLE_DATA;
}
