import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-section',
  templateUrl: './logo-section.component.html',
  styleUrls: ['./logo-section.component.css']
})
export class LogoSectionComponent {

  logos = [
    { marca: "Nestle", src: "assets/Nestle.png" },
    { marca: "Apple", src: "assets/Beco.png" },
    { marca: "Amazon", src: "assets/Amazon.png" },
    { marca: "Google.png", src: "assets/Google.png" },
    { marca: "Walmart", src: "assets/Walmart.png" }
  ]

}
