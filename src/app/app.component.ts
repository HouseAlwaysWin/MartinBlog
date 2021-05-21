import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNav: boolean = false;
  title = 'MartinBlog';

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
