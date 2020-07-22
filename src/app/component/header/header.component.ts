import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//   breadCrumb(menu, index) {
//     console.log('sub breadCrumb');
//     this.menuHeader.splice(index + 1, this.menuHeader.length - 1);
//     if (menu[index] && menu[index].items && menu[index].items.length) {
//       this.appitemsTravel = menu[index].items;
//     }
// }

}
