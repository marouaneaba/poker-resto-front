import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected imageHeaderDisplay: string;
  constructor() {}

  ngOnInit(): void {
  }

  public onChangeNavBarImage(event) {
    this.imageHeaderDisplay = event;
  }

  public getBackgroungImageStyle(): object {
    switch (this.imageHeaderDisplay) {
      case '/coffee':
        return {'background-image': 'URL(\"/assets/images/header/coffee/coffee_1.png\")'};
      case '/bar':
        return {'background-image': 'URL(\"/assets/images/header/bar/bar_2.png\")'};
      case '/restaurant':
        return {'background-image': 'URL(\"/assets/images/header/restaurant/restaurant_2.png\")'};
      case '/beer':
        return {'background-image': 'URL(\"/assets/images/header/beer/beer_3.png\")'};
      default:
        return {'background-image': 'URL(\"/assets/images/header/index-image.png\")'};
    }
  }

}
