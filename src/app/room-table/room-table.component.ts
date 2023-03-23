import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {UserInformation} from "../../Model/UserInformation";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomDto} from "../../Model/RoomDto";
import {RoomServiceService} from "../Service/room-service.service";

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.scss']
})
export class RoomTableComponent implements OnInit {
  @ViewChild('firstTableSort') sort!: MatSort;
  public filters?: string;
  displayedColumns = ['Nume', 'Chirias', 'Cladire', 'Contoare', 'Utilitati'];
  public ELEMENT_DATA: RoomDto[] = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router, private service: RoomServiceService) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(elem => {
    });
    this.service.findAllRooms().subscribe(data => {
      this.ELEMENT_DATA = data;
    });

  }

}
