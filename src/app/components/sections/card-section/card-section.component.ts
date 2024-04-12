import { Component } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent {

  icons = [
    {
      title: "Best quality pet food",
      description: "Super delicious food. Available in a range of delicious flavors.",
      alt: "osso",
      src: "assets/icons/Pet-food-icon.png"
    },

    {
      title: "Toys & Accessories",
      description: "Soft toys, chew toys, and rope toys. Strong, interactive, and fun.",
      alt: "bolinhas",
      src: "assets/icons/Accessories-icon.png"
    },

    {
      title: "Pets medical care",
      description: "You can get a wide range of great treatments for your dog.",
      alt: "medicina",
      src: "assets/icons/Medical-icon.png"
    },

    {
      title: "Full service grooming",
      description: "It's the right time to groom your dog with a variety of treatments.",
      alt: "tesoura",
      src: "assets/icons/Grooming-icon.png"
    },
  ]
}
