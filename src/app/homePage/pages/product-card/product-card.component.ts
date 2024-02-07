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
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductCardComponent {
  //tableWood: string = "assets/product-card/table-wood1.png"
  productImg = input.required<ProductI>();

}
