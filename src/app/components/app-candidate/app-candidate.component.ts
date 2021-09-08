import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import * as candidateList from '../../models/data.json';

@Component({
  selector: 'app-candidate',
  templateUrl: './app-candidate.component.html'
})
export class AppCandidateComponent {
  female = false;
  male = false;
  candidatesList = candidateList;

  searchTerm = '';

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.candidateService.getCandidatesList().subscribe(data => {
      this.candidatesList = data;
      console.log(data);
    });
  }

  filterCandidateList() {
    this.candidatesList.filter(
      candidate =>
        candidate['firstNAme'].includes(this.searchTerm) ||
        candidate['firstNAme'].includes(this.searchTerm) ||
        candidate['email'].include(this.searchTerm)
    );
  }
}
