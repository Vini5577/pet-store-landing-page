import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { VideoSectionComponent } from './components/sections/video-section/video-section.component';
import { LogoSectionComponent } from './components/sections/logo-section/logo-section.component';
import { CardSectionComponent } from './components/sections/card-section/card-section.component';
import { TestimonialSectionComponent } from './components/sections/testimonial-section/testimonial-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    VideoSectionComponent,
    LogoSectionComponent,
    CardSectionComponent,
    TestimonialSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
