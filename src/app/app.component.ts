import {Component} from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  openedSubject = new Subject<boolean>();
  dismissSidebar() {
    this.openedSubject.next(false);
  }
}
