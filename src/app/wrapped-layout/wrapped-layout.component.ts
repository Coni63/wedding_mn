import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wrapped-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './wrapped-layout.component.html',
  styleUrl: './wrapped-layout.component.scss'
})
export class WrappedLayoutComponent {

}
