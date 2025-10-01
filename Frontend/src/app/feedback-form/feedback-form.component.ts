import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feedback, phoneTypeValues, PizzaTypeValues } from './feedback-form.model';
import { FeedbackFormService } from './feedback-form.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  phoneTypes=phoneTypeValues;
  pizzaTypes=PizzaTypeValues;
 feedback: Feedback = {
  fullName: '',
  email: '',
  phone: {
         phoneNumber: '',
  phoneType: '',
      },
  dateOfVisit: null, 
  favoritePizza: '',
  rating: 1, 
  serviceSatisfaction: 0, 
  wouldRecommend: false, 
  likedToppings: [], 
  comments: ''
}


constructor(private feedbackService: FeedbackFormService, ){}


  saveFeedback(form :NgForm){
    console.log(form)
    this.feedbackService.saveForm(form.value).subscribe({
    })

  }

}
