import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import { remixFacebookFill, remixTwitterXFill, remixInstagramFill, remixLinkedinFill } from '@ng-icons/remixicon'
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { VideoSectionComponent } from './components/sections/video-section/video-section.component';
import { LogoSectionComponent } from './components/sections/logo-section/logo-section.component';
import { CardSectionComponent } from './components/sections/card-section/card-section.component';
import { TestimonialSectionComponent } from './components/sections/testimonial-section/testimonial-section.component';
import { ContactSectionComponent } from './components/sections/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    VideoSectionComponent,
    LogoSectionComponent,
    CardSectionComponent,
    TestimonialSectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ remixFacebookFill, remixTwitterXFill, remixInstagramFill, remixLinkedinFill })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
