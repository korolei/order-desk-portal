import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatChipsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
  ],
  declarations: []
})
export class MaterialModule { }
