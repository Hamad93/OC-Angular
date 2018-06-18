import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareilOne = 'PS3';
  appareilTwo = 'TV';
  appareilTree = 'Ordi';
  constructor(){
    setTimeout (
        () => {
          this.isAuth = true;
        }, 4000
    );
  }
  onAllumer(){
    alert("on allume tout !");
  }
}
