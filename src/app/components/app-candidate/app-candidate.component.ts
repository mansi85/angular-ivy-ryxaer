import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-new-candidate',
  templateUrl: 'app-new-candidate.component.html'
})
export class AppCandidateComponent {
  female = false;
  male = false;
  candidatesList: Array<object>;

  searchTerm = '';

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.candidateService
      .getCandidatesList()
      .subscribe(data => (this.candidatesList = data));
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
