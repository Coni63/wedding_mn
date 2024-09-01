import { Component } from '@angular/core';
import { ParticipantComponent } from "../participant/participant.component";

@Component({
  selector: 'app-wedding',
  standalone: true,
  imports: [ParticipantComponent],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.scss'
})
export class WeddingComponent {

  participants: any = {
    "demoiselles": [
      {
        "name": "Name1",
        "description": "description",
        "photo": "https://iso.500px.com/wp-content/uploads/2015/10/lohi_cover.jpeg",
        "reversed": false
      },
      {
        "name": "Name1",
        "description": "description",
        "photo": "https://iso.500px.com/wp-content/uploads/2015/10/lohi_cover.jpeg",
        "reversed": false
      },
      {
        "name": "Name1",
        "description": "description",
        "photo": "https://iso.500px.com/wp-content/uploads/2015/10/lohi_cover.jpeg",
        "reversed": false
      },
    ],
    "garcons": [
      {
        "name": "Name1",
        "description": "description",
        "photo": "https://iso.500px.com/wp-content/uploads/2015/10/lohi_cover.jpeg",
        "reversed": false
      },
      {
        "name": "Name1",
        "description": "description",
        "photo": "https://iso.500px.com/wp-content/uploads/2015/10/lohi_cover.jpeg",
        "reversed": true
      },
      {
        "name": "Name1",
        "description": "description",
        "photo": "https://iso.500px.com/wp-content/uploads/2015/10/lohi_cover.jpeg",
        "reversed": false
      },
    ],
    "other": [
      {
        "name": "Name1",
        "description": "description",
        "photo": "https://iso.500px.com/wp-content/uploads/2015/10/lohi_cover.jpeg",
        "reversed": false
      },
      {
        "name": "Name1",
        "description": "description",
        "photo": "https://iso.500px.com/wp-content/uploads/2015/10/lohi_cover.jpeg",
        "reversed": false
      },
      {
        "name": "Name1",
        "description": "description",
        "photo": "https://iso.500px.com/wp-content/uploads/2015/10/lohi_cover.jpeg",
        "reversed": false
      },
    ],
  }

}
