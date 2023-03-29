import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
// This is a widget Module, a component shared between multiple modules
@NgModule({
  declarations: [DividerComponent],
  imports: [CommonModule],
  exports: [DividerComponent],
})
export class SharedModule {}
