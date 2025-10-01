import { Component, OnInit } from '@angular/core';
import { FeedbackFormService } from '../feedback-form/feedback-form.service';
import { Observable } from 'rxjs';
import { Feedback } from '../feedback-form/feedback-form.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {

feedback$!:Observable<Feedback[]>;

constructor(private feedbackservice:FeedbackFormService){

}

ngOnInit(): void {
  this.feedback$= this.feedbackservice.getFormdetails();
}


}
