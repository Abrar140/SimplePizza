import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../home/pizza.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-all-product',
  standalone: true,
   imports: [CommonModule, FormsModule], 
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent implements OnInit {

   pizzas: any[]=[];

   pizzaForm: any = {
    pizzaId: 0,
    title: '',
    imageUrl: '',
    rating: 0,
    sizes: '',
    price: '',
    categoryId: 1
  };

  editingPizza: boolean = false;

  constructor(private pizzaService:PizzaService,     private sanitizer: DomSanitizer
){

  }

  ngOnInit() {
  
    this.loadPizzas();

  }

  loadPizzas(){
     this.pizzaService.getPizzas().subscribe(data => {
    this.pizzas = data;
     })
  }
  DeletePizza(id :number){
    this.pizzaService.deletePizza(id).subscribe(()=>{
      this.pizzas=this.pizzas.filter(p=>p.pizzaId!==id);
      console.log('Pizza is delted')
    })
  }

   AddaPizza(pizza:any){
    this.pizzaService.addPizza(pizza).subscribe((newPizza)=>{
      this.pizzas.push(newPizza);
      console.log('Pizza is added ')
    })
  }

   onSubmitPizza() {
    // Convert comma-separated strings into arrays
    const pizzaData = {
      ...this.pizzaForm,
      sizes: this.pizzaForm.sizes.split(',').map((s: string) => s.trim()),
      price: this.pizzaForm.price.split(',').map((p: string) => parseFloat(p))
    };

    if (this.editingPizza) {
      // Update existing pizza
      console.log("this is my edinting",pizzaData )
      this.pizzaService.updatePizza(pizzaData.pizzaId, pizzaData).subscribe(() => {
        this.loadPizzas();
        this.resetForm();
        console.log('Pizza updated');
      });
    } else {
      // Add new pizza
      this.pizzaService.addPizza(pizzaData).subscribe((newPizza) => {
        this.pizzas.push(newPizza);
        this.resetForm();
        console.log('Pizza added');
      });
    }
  }



   editPizza(pizza: any) {
    this.editingPizza = true;
    this.pizzaForm = {
      ...pizza,
      sizes: pizza.sizes.join(', '),
      price: pizza.price.join(', ')
    };
  }

  resetForm() {
    this.pizzaForm = {
      pizzaId: 0,
      title: '',
      imageUrl: '',
      rating: 0,
      sizes: '',
      price: '',
      categoryId: 0
    };
    this.editingPizza = false;
  }
  getSafeUrl(url:string):SafeUrl{
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}



