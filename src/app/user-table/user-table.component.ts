import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort'
import {User} from "../../Model/User";
import {Role} from "../../Model/Role";
import {UserServiceService} from "../Service/user-service.service";
import {UserInformation} from "../../Model/UserInformation";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @ViewChild('firstTableSort') sort!: MatSort;
  public filters?: string;
  displayedColumns = ['Nume', 'data Start', 'data Final'];
  public ELEMENT_DATA!: UserInformation[];

  constructor(private userService: UserServiceService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.ELEMENT_DATA = data;
    });
  }

  public onSearch() {
    if (this.filters) {
      this.userService.getUserByName(this.filters).subscribe(data => {
        this.ELEMENT_DATA = data;
      });
    } else {
      this.userService.getAllUsers().subscribe(data => {
        this.ELEMENT_DATA = data;
      })
    }
  }

  public goToProfile(event: Event){

  }
}
