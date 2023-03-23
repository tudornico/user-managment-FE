import { Component, OnInit } from '@angular/core';
import {User} from "../../Model/User";
import {MatDialogRef} from "@angular/material/dialog";
import {UserToCreate} from "../user-table/user-table.component";
import {Role} from "../../Model/Role";

@Component({
  selector: 'app-add-renter',
  templateUrl: './add-renter.component.html',
  styleUrls: ['./add-renter.component.scss']
})
export class AddRenterComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<UserToCreate>) { }
  public role?: [Role.ADMIN,Role.USER,Role.BERTEANU]

  ngOnInit(): void {
  }
  close(): void{
    this.dialogRef.close();
}
}
