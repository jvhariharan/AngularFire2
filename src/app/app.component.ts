import { Component, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('grid')
  public grid: GridComponent;

  constructor(firestore: AngularFireDatabase) {

    firestore.list('/orders').valueChanges().subscribe(orders => {
      this.grid.dataSource = orders;   //intial data binding to grid
    });

    firestore.list('/orders').snapshotChanges().subscribe(orders => {
      this.grid.dataSource = orders; // sync server data changes to grid
    });
  }
}
