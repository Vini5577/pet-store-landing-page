import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  story = [
    "Faq", "Contact"
  ]

  pet = [
    "Treatments", "Health", "Hygiene"
  ]

  shop = [
    "Pet Food", "Toys", "Accessories"
  ]
}
