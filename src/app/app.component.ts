import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword: string = 'test';

  doSearch($event: KeyboardEvent, inputDom: HTMLInputElement) {
    if($event.keyCode == 13) {
      this.keyword = inputDom.value;
    }
  }
}
