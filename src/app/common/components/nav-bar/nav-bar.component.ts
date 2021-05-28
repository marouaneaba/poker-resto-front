import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output()
  private tabSelected = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {}

  public navigateTo(redirect: string) {
    this.tabSelected.emit(redirect);
    this.router.navigate([`${redirect}`]);
  }

}
