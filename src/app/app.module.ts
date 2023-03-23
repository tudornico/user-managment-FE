import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserTableComponent} from './user-table/user-table.component';
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AddRenterComponent} from './add-renter/add-renter.component';
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {RoomTableComponent} from './room-table/room-table.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserProfileComponent,
    AddRenterComponent,
    RoomTableComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSortModule,
        MatCardModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatSliderModule,
        MatButtonModule,
        RouterModule.forRoot([
            {path: '', component: UserTableComponent},
            {path: 'rooms', component: RoomTableComponent},
            {path: 'profile', component: UserProfileComponent}
        ]),
        MatSelectModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
