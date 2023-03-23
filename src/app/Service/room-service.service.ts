import {Injectable} from '@angular/core';
import {RoomTableComponent} from "../room-table/room-table.component";
import {RoomDto} from "../../Model/RoomDto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../Model/Room";

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  private BaseURL: string;

  constructor(private http: HttpClient) {
    this.BaseURL = "http://localhost:8080/api/rooms";
  }

  public findAllRooms(): Observable<RoomDto[]> {
    // @ts-ignore
    return this.http.get(this.BaseURL + "/full-all");
  }
}
