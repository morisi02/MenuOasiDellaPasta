import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimiPiattiComponent } from './primi-piatti.component';

@NgModule({
  declarations: [PrimiPiattiComponent],
  imports: [CommonModule], // Importa le direttive di Angular (es. *ngFor)
  exports: [PrimiPiattiComponent] // Permette di usarlo in altri moduli
})
export class PrimiPiattiModule { }
