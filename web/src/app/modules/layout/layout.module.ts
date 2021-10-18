import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TopNavComponent } from './top-nav/top-nav.component';


@NgModule({
  declarations: [LayoutComponent, FooterComponent, MainComponent, TopMenuComponent, TopNavComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
