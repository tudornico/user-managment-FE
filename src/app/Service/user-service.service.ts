import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {UserInformation} from "../../Model/UserInformation";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {matSnackBarAnimations} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserServiceService {
  private BaseURL: string;

  constructor(private http: HttpClient) {
    this.BaseURL = "http://localhost:8080/api/user";
  }

  public getAllUsers(): Observable<UserInformation[]> {
    // @ts-ignore
    return this.http.get<UserInformation>(this.BaseURL + "/all-users");
  }

  public getUserByName(name: string): Observable<UserInformation[]> {
    if (name) {
      let params = new HttpParams().set("name", name);

      return this.http.get<UserInformation[]>(this.BaseURL + "/user-name", {params: params});
    }
    throw new Error();
  }

}
