import { Injectable } from '@angular/core';
import { Feedback } from './feedback-form.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedbackFormService {
  private feedback : Feedback[]= [];

  constructor(private http: HttpClient) {}

  saveForm(form: Feedback): Observable<Feedback> {
    const headers = { headers: { 'Content-Type': 'application/json' } };
    this.feedback.push(form);
    return this.http.post<Feedback>('api/feedback', form, headers);
  }

  getFormdetails(): Observable<Feedback[]>{
    return of(this.feedback);
  }
}
