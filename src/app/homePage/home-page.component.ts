import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export default class HomePageComponent {
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
