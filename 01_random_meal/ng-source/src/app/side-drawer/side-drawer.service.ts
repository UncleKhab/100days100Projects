import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SideDrawerService {
  displayDrawer = true;
  notifyChange = new Subject<boolean>();

  constructor() {}

  toggleDrawer() {
    this.displayDrawer = !this.displayDrawer;
    this.notifyChange.next(this.displayDrawer);
  }
}
