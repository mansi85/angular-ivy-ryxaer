import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  constructor(private http: HttpClient) {}

  getCandidatesList() {
    return this.http.get('../models/data.json');
  }
}
