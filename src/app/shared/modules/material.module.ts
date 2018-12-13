import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatSortModule, MatLabel, MatInputModule } from '@angular/material';
import { MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MatChipsModule, MatSidenavModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatChipsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule
  ],
  exports: [
    BrowserAnimationsModule, MatChipsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule
  ]
})
export class MaterialModule { }
