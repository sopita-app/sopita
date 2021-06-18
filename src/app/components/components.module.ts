import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from '../tasks/form/form.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
  ],
  exports: [
    NavbarComponent
  ],
  entryComponents: [FormComponent]
})
export class NavBarModule { }
