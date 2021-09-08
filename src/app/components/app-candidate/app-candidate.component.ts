import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
// import { CandidateService } from '../../services/candidate.service';
// import * as candidateList from '../../models/data.json';

@Component({
  selector: 'app-candidate',
  templateUrl: './app-candidate.component.html'
})
export class AppCandidateComponent {
  female = false;
  male = false;
  candidatesList = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male'
    }
  ];
  searchTerm = '';

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    //data was not coming. Hence, hardcoded above. something with stackblitz since http get looks good to me
    // this.candidateService.getCandidatesList().subscribe(data => {
    //   this.candidatesList = JSON.stringify(data);
    //   console.log(data);
    // });
  }

  filterCandidateList() {
    console.log('in search');
    this.candidatesList.filter(
      candidate =>
        candidate['firstNAme'].includes(this.searchTerm) ||
        candidate['firstNAme'].includes(this.searchTerm) ||
        candidate['email'].includes(this.searchTerm)
    );
  }
}
