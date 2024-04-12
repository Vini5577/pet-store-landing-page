import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-section',
  templateUrl: './logo-section.component.html',
  styleUrls: ['./logo-section.component.css']
})
export class LogoSectionComponent {

  logos = [
    { marca: "Nestle", src: "assets/logos/Nestle.png" },
    { marca: "Apple", src: "assets/logos/Beco.png" },
    { marca: "Amazon", src: "assets/logos/Amazon.png" },
    { marca: "Google.png", src: "assets/logos/Google.png" },
    { marca: "Walmart", src: "assets/logos/Walmart.png" }
  ]

}
