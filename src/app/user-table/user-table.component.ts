import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort'
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  constructor() { }
  @ViewChild('firstTableSort') sort!: MatSort;
  public filters?: string;
  ngOnInit(): void {
  }

}
