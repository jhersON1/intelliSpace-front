import { Component, signal } from '@angular/core';
import ProductCardComponent from "./pages/product-card/product-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent {
// TODO: backend
  public productsImg= signal([
    {name: 'Table wood 1', company: 'Company name 1', image: 'assets/product-card/table-wood1.png'},
    {name: 'Table wood 2', company: 'Company name 2', image: 'assets/product-card/table-wood2.png'},
    {name: 'Table wood 3', company: 'Company name 3', image: 'assets/product-card/table-wood3.png'},
    {name: 'Table wood 4', company: 'Company name 4', image: 'assets/product-card/table-wood4.png'},
  ])
}
