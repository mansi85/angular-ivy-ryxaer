import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
