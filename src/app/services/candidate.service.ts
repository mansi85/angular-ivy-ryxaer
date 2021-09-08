import { HttpClient } from '@angular/common/http';

export class CandidateService {
  constructor(private http: HttpClient) {}

  getCandidatesList() {
    return this.http.get('../models/data.json');
  }
}
