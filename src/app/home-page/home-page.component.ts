import { Component } from '@angular/core';
import { BannerComponent } from "../components/banner/banner.component";
import { AboutComponent } from "../components/about/about.component";
import { TechnologyComponent } from "../components/technology/technology.component";
import { FooterComponent } from "../components/footer/footer.component";
import { TestimonialsComponent } from "../components/testimonials/testimonials.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BannerComponent, AboutComponent, TechnologyComponent, FooterComponent, TestimonialsComponent, NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
