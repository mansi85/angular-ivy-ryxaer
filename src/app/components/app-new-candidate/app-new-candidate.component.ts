import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './app-new-candidate.component.html'
})
export class AppNewCandidateComponent {
  candidateForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl('')
  });

  onSubmit() {
    console.log('Candidate added');
  }
}
