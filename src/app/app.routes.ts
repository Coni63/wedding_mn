import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GiftListComponent } from './gift-list/gift-list.component';
import { RegisterComponent } from './register/register.component';
import { WrappedLayoutComponent } from './wrapped-layout/wrapped-layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { 
      path: 'index',  
      component: LandingPageComponent,
    },
    { 
      path: 'wedding', 
      component: WrappedLayoutComponent,
      children: [
        {
          path: '',
          component: WeddingComponent, // Other page component
        },
      ],
    },
    // { path: 'travel', component: TravelComponent},
    // { path: 'entourage', component: EntourageComponent},
    { 
      path: 'schedule', 
      component: WrappedLayoutComponent,
      children: [
        {
          path: '',
          component: ScheduleComponent, // Other page component
        },
      ],
    },
    { 
      path: 'gallery', 
      component: WrappedLayoutComponent,
      children: [
        {
          path: '',
          component: GalleryComponent, // Other page component
        },
      ],
    },
    { 
      path: 'gift-list', 
      component: WrappedLayoutComponent,
      children: [
        {
          path: '',
          component: GiftListComponent, // Other page component
        },
      ],
    },
    { 
      path: 'registry', 
      component: WrappedLayoutComponent,
      children: [
        {
          path: '',
          component: RegisterComponent, // Other page component
        },
      ],
    },
  ];