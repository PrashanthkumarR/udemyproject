import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { ShopingcartComponent } from './components/shopingcart/shopingcart.component';
import { LoginComponent } from './components/login/login.component';
import { MainContentComponent } from './components/main-content/main-content.component';

@NgModule({
  declarations: [CategoriesComponent, InstructorComponent, ShopingcartComponent, LoginComponent, MainContentComponent],
  imports: [ CommonModule],
  exports:[CategoriesComponent ,InstructorComponent ,ShopingcartComponent,LoginComponent,MainContentComponent]
})
export class HomeModule { }
