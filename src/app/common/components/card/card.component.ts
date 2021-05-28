import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;

  @Input() subTitle: String;

  @Input() price: number;

  @Input() description: string;

  @Input() organisation: string;

  @Input() startdate: string;

  constructor() { }

  ngOnInit(): void {
  }

}
