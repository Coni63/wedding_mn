import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant',
  standalone: true,
  imports: [NgClass],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.scss'
})
export class ParticipantComponent implements OnInit {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() photo: string = '';
  @Input() reversed: boolean = true;

  constructor() {
    console.log(this.reversed);
  }

  ngOnInit() {
    console.log(this.reversed);
  }
}
