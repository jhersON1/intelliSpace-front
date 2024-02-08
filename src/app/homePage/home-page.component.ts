import { Component, signal, HostListener } from '@angular/core';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import ProductCardComponent from './pages/product-card/product-card.component';
import { ImagesCollageComponent } from './pages/images-collage/images-collage.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ProductCardComponent,
    NavbarComponent, 
    FooterComponent,
    ImagesCollageComponent
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

  banner = "assets/banner/banner.png"
  navbarBackgroundColor = 'rgba(255, 255, 255, 0.374)';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 790) {
      this.navbarBackgroundColor = 'rgba(255, 255, 255, 1)'; 
    } else {
      this.navbarBackgroundColor = 'rgba(255, 255, 255, 0.374)'; 
    }
  }
}
