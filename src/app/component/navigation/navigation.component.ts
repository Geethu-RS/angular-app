import { Component, OnInit } from '@angular/core';
import { navigation } from '../../core/mocks/navigation-list';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class NavigationComponent implements OnInit {
  public appDrawer: any;
  navigationItems: any;
  constructor(public router: Router) {
    this.navigationItems = navigation;
  }

  ngOnInit(): void {
  }
  onItemSelected(menu) {
    // console.log('item', menu);
    if (!menu.items || !menu.items.length) {
      this.router.navigate([menu.link]);
    }
    if (menu.items && menu.items.length) {
      if(menu.expanded){
        menu.expanded =false;
      }else{
        menu.expanded =true;
      }
    }
  }

}
