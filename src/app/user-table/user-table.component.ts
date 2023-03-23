import {Component, Inject, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort'
import {User} from "../../Model/User";
import {Role} from "../../Model/Role";
import {UserServiceService} from "../Service/user-service.service";
import {UserInformation} from "../../Model/UserInformation";
import {MatDialog} from "@angular/material/dialog";
import {AddRenterComponent} from "../add-renter/add-renter.component";
import {Router, Routes} from "@angular/router";
import {RoomTableComponent} from "../room-table/room-table.component";

export interface UserToCreate {
  name: string;
  email: string;
  role: Role;
  totalPrice: number;
}

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
  public routes : Routes = [
    {path: '/rooms' , component: RoomTableComponent}
  ];
  constructor(private userService: UserServiceService, private dialog: MatDialog,
              private router: Router
  ) {
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

  public goToProfile(event: Event) {
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(AddRenterComponent, {
      width: '400px',
      height: '500px',
      autoFocus: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
