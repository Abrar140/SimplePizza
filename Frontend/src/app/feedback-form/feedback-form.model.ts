export interface Feedback {
  fullName: string,
  email: string,
  phone: Phone,
  dateOfVisit: Date | null, 
  favoritePizza: string, 
  rating: number, 
  serviceSatisfaction: number, 
  wouldRecommend: Boolean,
  likedToppings: string[], 
  comments: string
}
export interface Phone{
    phoneNumber:string,
    phoneType:string,
}


export const phoneTypeValues=[
    {title:'Mobile', value:'mobile'},
    {title:'Work', value:'work'},
    {title:'Other', value:'other'}
]


export const PizzaTypeValues = [
  { title: 'Margherita', value: 'margherita' },
  { title: 'Pepperoni', value: 'pepperoni' },
  { title: 'BBQ Chicken', value: 'bbq_chicken' },
  { title: 'Veggie Delight', value: 'veggie' },
  { title: 'Hawaiian', value: 'hawaiian' },
  { title: 'Four Cheese', value: 'four_cheese' },
  { title: 'Meat Lovers', value: 'meat_lovers' },
  { title: 'Spicy Paneer', value: 'spicy_paneer' },
  { title: 'Mexican Green Wave', value: 'mexican_green_wave' },
  { title: 'Supreme', value: 'supreme' }
];
