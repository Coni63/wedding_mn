import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopNavComponent } from '../top-nav/top-nav.component';
declare var $: any;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TopNavComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('assets/js/glanz_script.js');
  }
}