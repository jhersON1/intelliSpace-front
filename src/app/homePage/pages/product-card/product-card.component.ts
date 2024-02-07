import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { ProductI } from '../../interfaces/product-card.interface';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export default class ProductCardComponent {
  productImg = input.required<ProductI>();
}
